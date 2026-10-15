/**
 * Google Apps Script backend for RSVP + Wishes.
 *
 * Setup:
 * 1. Open the spreadsheet -> Extensions -> Apps Script.
 * 2. Replace everything in Code.gs with this file and save.
 * 3. Deploy -> New deployment -> type "Web app"
 *      Execute as: Me
 *      Who has access: Anyone
 * 4. Copy the Web app URL (ends with /exec) into src/utils/sheets.ts.
 *
 * The "RSVP" and "Wishes" tabs (with headers) are created automatically
 * on the first submission, or right away by running setupSheets() once.
 */

const SPREADSHEET_ID = '1GrsEQGWN74fyI6soaRchcQgENyHjcu3Tlz6zml9zxnU';

const SHEETS = {
  RSVP: {
    name: 'RSVP',
    headers: ['Timestamp', 'Full Name', 'Attendance', 'Guests', 'Event', 'Message'],
    row: (p) => [new Date(), p.fullName, p.attendance, p.guests, p.event, p.thoughts],
  },
  WISH: {
    name: 'Wishes',
    headers: ['Timestamp', 'Name', 'Message'],
    row: (p) => [new Date(), p.name, p.message],
  },
};

function getSheet_(config) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = ss.getSheetByName(config.name);
  if (!sheet) sheet = ss.insertSheet(config.name);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(config.headers);
    sheet.getRange(1, 1, 1, config.headers.length)
      .setFontWeight('bold')
      .setBackground('#f3e8ee');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const p = (e && e.parameter) || {};
    const config = SHEETS[String(p.sheet || '').toUpperCase()];
    if (!config) return json_({ ok: false, error: 'Unknown sheet: ' + p.sheet });

    const sheet = getSheet_(config);
    const values = config.row(p).map((v) => (v === undefined ? '' : v));
    sheet.appendRow(values);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Read wishes back (optional): GET <url>?sheet=WISH
function doGet(e) {
  const p = (e && e.parameter) || {};
  const config = SHEETS[String(p.sheet || 'WISH').toUpperCase()];
  if (!config) return json_({ ok: false, error: 'Unknown sheet' });

  const rows = getSheet_(config).getDataRange().getValues();
  const headers = rows.shift();
  const data = rows.map((r) => Object.fromEntries(headers.map((h, i) => [h, r[i]])));
  return json_({ ok: true, data });
}

// Run once manually from the editor to create both tabs with headers.
function setupSheets() {
  Object.values(SHEETS).forEach(getSheet_);
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
