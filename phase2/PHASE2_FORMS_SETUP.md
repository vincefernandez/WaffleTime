# Forms setup guide (matches the owner's two Google Forms)
Status: workbook rebuilt for the owner's real forms and verified with test data. Not yet tested in your Google account.

Employees (for the dropdown): Jimboie Magday, Lanielyn Magday, Roselyn Fernandez, Robelyn Fernandez, Alma Yumul, Amy Pucot

## Fixes to make in your two forms (from your screenshots)
**Form 1: Attendance** (tab `Attendance_Responses`: Timestamp, Store Branch, Employee Name, Remarks)
1. Give it a title, for example "Waffle Time Attendance", and a one-line description.
2. Change **Employee Name** from Short answer to **Dropdown** with the six names. Typed names will be spelled differently and the per-employee count will split.
3. Keep Store Branch as required. Date and time come from the Timestamp, so each submission counts as one person present that day.

**Form 2: Daily Closing Report** (tab `Closing_Responses`: Timestamp, Business Date, Store Branch, Gross Sales, Sales Cash Counted, Expense Description, Expense Amount, Receipt, Remarks)
1. **Business Date** is currently a multiple-choice question ("Option 1"). Change its type to **Date** and make it required. Keep it even though there is a Timestamp: a report sent after midnight would otherwise land on the wrong day.
2. **Gross Sales** and **Sales Cash Counted**: type Number, greater than or equal to 0, both required. (Gross Sales does not show a required star yet.)
3. **Expense Amount**: type Number, greater than or equal to 0, not required (days with no expense). **Expense Description**: not required.
4. **"Receipt Available?" is a file upload.** Rename it "Receipt photo (optional)". Note: upload questions force employees to sign in with Google, and photos are stored in the form owner's Google Drive.
5. Add at the very END of the form (so the column order stays correct): **Change Fund Amount Found** (Number, required). It lets the dashboard show the 2,000 fund check you approved earlier. Do not add other questions before the last column.
6. Rename the tab once linked to the spreadsheet, and keep the question order exactly as listed.

## Using one merged form: what to know
- One submission per branch per day is the best use. Put the **total** expenses of the day in Expense Amount and list each item in Expense Description.
- If an extra expense comes later, submit the form again with the same sales numbers. Expenses are added up across all submissions; sales come from the latest one. The row shows "Multiple (same totals)", which is fine. If the sales numbers differ, it shows **Conflict: review**.
- Trade-off: with a single amount per submission you cannot analyse each expense separately yet.
- Email is not collected, so the workbook cannot show who submitted a report. Turn on verified email later only if you want that (it inserts a column and the workbook needs a small update first).

## Link to Google Sheets
Responses tab > Link to Sheets > select the Waffle Time workbook. Then rename the new tabs to `Closing_Responses` and `Attendance_Responses` and **delete the sample (TEST) rows** in those two tabs and row 2 of `Corrections`. Share only the form links with employees, never the spreadsheet.

## Dashboard and corrections
- **Dashboard**: choose month, start/end date and branch. It shows Gross Sales, Expenses, Net Sales (Gross - Expenses), days present, attendance remarks, shortage and overage, conflicts to review, a branch comparison and five charts.
- **Corrections**: never edit a form answer. Add a line with the original value, corrected value and reason; set Status to Void to undo. Attendance corrections are not supported yet.

## Test before going live
- [ ] Submit each form from a phone and a computer; each lands in the right tab
- [ ] A letter in an amount field is rejected; an empty required field is rejected
- [ ] Submit two closing reports with different sales for one branch and date: row shows Conflict: review
- [ ] Compare Daily_Summary with a hand calculation for one day
- [ ] Confirm employees cannot open the spreadsheet

## Open questions (reply "ok" to accept every default)
1. Add Change Fund Amount Found to the closing form? Default: yes.
2. Attendance Remarks counts entries that have a remark (default). Do you want "late" measured by a shift start time instead? Tell me the time.
3. Do you want each expense recorded separately later? Default: keep one total per day.
