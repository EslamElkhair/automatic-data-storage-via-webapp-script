var SHEET_URL = 'https://docs.google.com/spreadsheets/d/1OyP7_P-faPTmIJnds1Ctgx2aBiNlePO_rRcwo8LHgro/edit#gid=0';


function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('Index');
}


function userClicked(phoneNumber){
  var spreadsheet = SpreadsheetApp.openByUrl(SHEET_URL);
  var sheet = spreadsheet.getSheets()[0];
  
  sheet.appendRow([new Date(), phoneNumber]);
}