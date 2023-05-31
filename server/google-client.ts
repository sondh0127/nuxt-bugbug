import { google } from 'googleapis'
import credentials from './sigma-bugbug-5f1102bb46b7.json'

const { client_email, private_key } = credentials

// Authenticated Google Sheets client
export const client = new google.auth.JWT(
  client_email,
  null,
  private_key,
  ['https://www.googleapis.com/auth/spreadsheets'],
)

// Configuration
export const spreadsheetId = '1Zzj3S2dfYBxYtFtUxbqtj4j9y8ix3Bu5rUlCB1C7ORc'

export const sheetConfig = {
  range: 'Sheet1!A:B',
  sheetId: 0,
}

// Retrieve existing data from Google Sheets
export async function getSheetsData(config) {
  const sheets = google.sheets({ version: 'v4', auth: client })

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: config.range,
  })

  const rows = response.data.values || []

  return rows
}
