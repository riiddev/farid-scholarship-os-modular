// Tempelkan kode ini di Google Sheet (Ekstensi -> Apps Script) lalu Deploy -> Web App (Access: Anyone)
const SHEET_ID = '1A2Nnjd0WYs1Y5PRzoBPEOC0UD9bx3oEfUBeyTGZanJc';

function doGet() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const payload = {
    status: 'ok',
    updatedAt: new Date().toISOString(),
    tabs: {}
  };
  ss.getSheets().forEach((sheet) => {
    payload.tabs[sheet.getName()] = sheet.getDataRange().getValues();
  });
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}