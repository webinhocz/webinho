// Meta Pixel / dataset "Webinho Pixel" in the Webinho business portfolio.
export const META_PIXEL_ID = "2244212969809784";

export const CONSENT_KEY = "webinho_cookie_consent";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

const CAMPAIGN_KEY = "webinho_campaign";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];

function campaignFrom(search: string) {
  const params = new URLSearchParams(search);
  const parts = UTM_KEYS.filter((k) => params.get(k)).map((k) => `${k}=${params.get(k)}`);
  // Meta adds fbclid to every ad click, even when the ad has no UTM tags
  if (params.has("fbclid")) parts.push("reklama Meta (fbclid)");
  return parts.join(" · ");
}

/** Keeps the ad campaign tags for this visit, so a form on another page can still report them. */
export function rememberCampaign() {
  try {
    const campaign = campaignFrom(window.location.search);
    if (campaign) window.sessionStorage.setItem(CAMPAIGN_KEY, campaign);
  } catch {
    // storage blocked: the form then reports only the page
  }
}

/** Form name, page and ad campaign, sent with an inquiry so Lukáš sees which ad brought it. */
export function leadSource(form: string) {
  let campaign = campaignFrom(window.location.search);
  if (!campaign) {
    try {
      campaign = window.sessionStorage.getItem(CAMPAIGN_KEY) ?? "";
    } catch {
      campaign = "";
    }
  }
  return [form, window.location.pathname, campaign].filter(Boolean).join(" · ");
}

/**
 * Reports a sent inquiry form. Both trackers only exist after the visitor
 * accepted cookies, so without consent this does nothing.
 */
export function trackLead(source: string) {
  window.fbq?.("track", "Lead", { content_name: source });
  window.gtag?.("event", "generate_lead", { form_source: source });
}

/** Reports a tap on the phone number or e-mail address (a call from an ad is a lead too). Needs consent, like trackLead. */
export function trackContact(method: "telefon" | "email") {
  const page = window.location.pathname;
  window.fbq?.("track", "Contact", { content_name: method, content_category: page });
  window.gtag?.("event", "contact_click", { method, page });
}
