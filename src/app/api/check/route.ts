import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import { sheets_v4 } from 'googleapis';



export async function POST(req: Request) {
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

        return Response.json({
            success: true,
            message: "user found "
        }, { status: 200 })

    } catch (error) {
        console.log("Something error in checking email")
        return Response.json({
            success: false,
            message: "User not found"
        }, { status: 404 })
    }

}