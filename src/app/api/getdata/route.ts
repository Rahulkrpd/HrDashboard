// app/api/getdata/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import { sheets_v4 } from 'googleapis';

export async function GET(req: NextRequest) {
    try {
        
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

        const data = await googleSheets.spreadsheets.values.get({
            auth,
            spreadsheetId: spreadsheetId!,
            range: 'Sheet1',
        });

        return NextResponse.json(data.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
