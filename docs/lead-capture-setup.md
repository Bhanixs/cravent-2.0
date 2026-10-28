# Lead capture setup (Google Sheets + email)

The contact form posts each enquiry to a Google Apps Script web app. The script adds a row to a
Google Sheet (opens in Excel) and emails an alert. After a successful submit the visitor is sent to
`/thank-you`, which fires the GA4 `generate_lead` event once.

## 1. Create the sheet and script

1. Create a new Google Sheet, e.g. "Cravent Leads". Use the account that should own the data.
2. Extensions -> Apps Script. Replace the code with:

```js
const NOTIFY_EMAIL = "info@cravent.in";
const HEADERS = ["Submitted At", "Name", "Company", "Email", "Phone", "Industry", "Focus",
  "Timeline", "Budget", "Message", "Page", "Referrer",
  "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"];

function doPost(e) {
  const d = JSON.parse(e.postData.contents);
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
  // Plain-text cells keep values like +91 phone numbers from being read as formulas.
  // setValues() still turns a string starting with "=" into a formula, so those get a
  // leading apostrophe (hidden by Sheets) to stay as text.
  const row = [d.submittedAt, d.name, d.company, d.email, d.phone, d.industry, d.focus,
    d.timeline, d.budget, d.message, d.page, d.referrer,
    d.utm_source, d.utm_medium, d.utm_campaign, d.utm_term, d.utm_content, d.gclid, d.fbclid]
    .map(function (v) {
      v = v == null ? "" : String(v);
      return v.charAt(0) === "=" ? "'" + v : v;
    });
  const range = sheet.getRange(sheet.getLastRow() + 1, 1, 1, row.length);
  range.setNumberFormat("@");
  range.setValues([row]);
  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    replyTo: d.email,
    subject: "New Cravent enquiry: " + d.name + " (" + d.company + ")",
    body: [
      "Name: " + d.name,
      "Company: " + d.company,
      "Email: " + d.email,
      "Phone: " + d.phone,
      "Industry: " + d.industry,
      "Focus: " + d.focus,
      "Timeline: " + d.timeline,
      "Budget: " + d.budget,
      "",
      d.message,
      "",
      "Source: " + (d.utm_source || "direct") + " / " + (d.utm_campaign || "-"),
      "Page: " + d.page,
    ].join("\n"),
  });
  return ContentService.createTextOutput("ok");
}

// Visiting the web app URL in a browser shows which code version is live.
function doGet() {
  return ContentService.createTextOutput("cravent lead endpoint - v4 plain-text rows");
}
```

3. Deploy -> New deployment -> type **Web app**. Execute as: **Me**. Who has access: **Anyone**.
4. Authorise when asked, then copy the **Web app URL**.

## 2. Configure the site

- Local: copy `.env.example` to `.env` and set `VITE_LEADS_ENDPOINT` to the URL.
- Vercel: Project -> Settings -> Environment Variables -> add `VITE_LEADS_ENDPOINT` for Production
  (and Preview), then redeploy. The value is baked in at build time.

## 3. Test

Submit the form on /contact. A row should appear in the sheet, an email should arrive, and the
browser should land on /thank-you. Editing the script later needs Deploy -> Manage deployments -> Edit (pencil) ->
Version: New version -> Deploy. The web app URL stays the same.

## Ads tracking

`/thank-you` is `noindex` and fires `generate_lead` only right after a real submission.
- GA4: mark `generate_lead` as a key event in GA4 (Admin -> Events).
- Google Ads: import that GA4 key event, or add a conversion tag in `src/routes/thank-you.tsx`.
- Meta: add the Pixel base code to `src/routes/__root.tsx` and `fbq("track", "Lead")` on the page.
