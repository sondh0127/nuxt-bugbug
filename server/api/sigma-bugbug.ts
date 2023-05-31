import { getSheetsData, sheetConfig } from '../google-client'

export default defineEventHandler(async () => {
  const res = await getSheetsData(sheetConfig)
  const emails = res.map(item => item[0]).splice(1)
  return emails
})
