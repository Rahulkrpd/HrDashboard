
import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import { sheets_v4 } from 'googleapis';

export async function POST(req: NextRequest) {
    try {
        const { email } = await req.json();

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });
        const client = await auth.getClient();
        const googleSheets = google.sheets({ version: 'v4', auth: client as any });
        const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;

        const sheetData = await googleSheets.spreadsheets.values.get({
            spreadsheetId,
            range: 'Sheet1',
        });
        const rows = sheetData.data.values;

        if (!rows || rows.length < 2) {
            return NextResponse.json({ error: 'No data found' }, { status: 404 });
        }

        const headers = rows[0];
        const dataRows = rows.slice(1);

        const username = email.slice(0, email.indexOf('@'));

        const user = dataRows.find((row: string[]) => row[headers.indexOf('user_id')] === username);
        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        const teamName = user[headers.indexOf('Team Name')];
        const userRole = user[headers.indexOf('Designation')];

        if (userRole === 'CEO' || userRole === 'HR') {
            // Group data by team name
            const allData = dataRows.map((row: any) =>
                Object.fromEntries(row.map((val: string, idx: number) => [headers[idx], val]))
            );

            const groupCounts = dataRows.reduce((acc: any, row: any) => {
                const type = row[headers.indexOf('Designation')];
                acc[type] = (acc[type] || 0) + 1;
                return acc;
            }, {});

            return NextResponse.json({
                allData, // Array of team arrays
                groupCounts,
                total: dataRows.length,
            }, { status: 200 });
        }
        else if (userRole === 'Team Leader') {

            const teamData = dataRows.filter((row: string[]) => row[headers.indexOf('Team Name')] === teamName);
            return NextResponse.json({
                teamData: teamData.map((row: string[]) => Object.fromEntries(row.map((val, idx) => [headers[idx], val]))),
                teamCount: teamData.length,
            }, { status: 200 });

        }
        else {
            return NextResponse.json({ error: 'Unauthorized access' }, { status: 403 });
        }

    } catch (error) {
        console.error('Error in sign-in endpoint:', error);
        return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
    }
}
