export const LEAD_SENT_KEY = "cravent_lead_sent";

const ENDPOINT = import.meta.env["VITE_LEADS_ENDPOINT"] as string | undefined;

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"];

/** UTM / click ids are kept for the session so the lead keeps its ad source after navigating. */
export function captureAttribution() {
  try {
    const params = new URLSearchParams(window.location.search);
    UTM_KEYS.forEach((k) => {
      const v = params.get(k);
      if (v) sessionStorage.setItem(k, v);
    });
  } catch {
    /* storage unavailable */
  }
}

function attribution(): Record<string, string> {
  const out: Record<string, string> = {};
  try {
    UTM_KEYS.forEach((k) => {
      const v = sessionStorage.getItem(k);
      if (v) out[k] = v;
    });
  } catch {
    /* storage unavailable */
  }
  return out;
}

/** Posts a lead to the Google Apps Script web app that appends it to the Google Sheet. */
export async function submitLead(fields: Record<string, string>) {
  if (!ENDPOINT) throw new Error("Lead endpoint is not configured");
  // text/plain keeps this a "simple" request, so the Apps Script endpoint needs no CORS preflight.
  await fetch(ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({
      ...fields,
      ...attribution(),
      page: window.location.href,
      referrer: document.referrer,
      submittedAt: new Date().toISOString(),
    }),
  });
}
