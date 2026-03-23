/**
 * Google Apps Script — REST API for Garden Beds Pro leads
 *
 * Paste this into Extensions → Apps Script in your Google Sheet.
 * Deploy as a web app with "Anyone" access.
 */

const SHEET_NAME = 'Leads';

function doGet(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const leads = [];

  for (let i = 1; i < data.length; i++) {
    if (!data[i][0]) continue; // skip empty rows
    const lead = {};
    headers.forEach((h, j) => { lead[h] = data[i][j]; });
    leads.push(lead);
  }

  return ContentService
    .createTextOutput(JSON.stringify({ leads }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const payload = JSON.parse(e.postData.contents);

  if (payload.action === 'add') {
    const lead = payload.lead;
    const id = lead.id || Utilities.getUuid();
    sheet.appendRow([
      id,
      lead.name || '',
      lead.contact || '',
      lead.location || '',
      lead.notes || '',
      lead.status || 'new',
      lead.created || new Date().toISOString()
    ]);
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, id }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  if (payload.action === 'update') {
    const lead = payload.lead;
    const data = sheet.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === lead.id) {
        if (lead.name !== undefined) sheet.getRange(i + 1, 2).setValue(lead.name);
        if (lead.contact !== undefined) sheet.getRange(i + 1, 3).setValue(lead.contact);
        if (lead.location !== undefined) sheet.getRange(i + 1, 4).setValue(lead.location);
        if (lead.notes !== undefined) sheet.getRange(i + 1, 5).setValue(lead.notes);
        if (lead.status !== undefined) sheet.getRange(i + 1, 6).setValue(lead.status);
        return ContentService
          .createTextOutput(JSON.stringify({ success: true }))
          .setMimeType(ContentService.MimeType.JSON);
      }
    }
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: 'Lead not found' }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  if (payload.action === 'delete') {
    const data = sheet.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === payload.id) {
        sheet.deleteRow(i + 1);
        return ContentService
          .createTextOutput(JSON.stringify({ success: true }))
          .setMimeType(ContentService.MimeType.JSON);
      }
    }
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: 'Lead not found' }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  return ContentService
    .createTextOutput(JSON.stringify({ success: false, error: 'Unknown action' }))
    .setMimeType(ContentService.MimeType.JSON);
}
