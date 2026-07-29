import { Resend } from "resend";
import { NextResponse } from "next/server";

function escapeHtml(value: unknown): string {
  return String(value ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!)
  );
}

const LOGO_URL = "https://www.webinho.cz/brand/webinho-logo-white.png";

const CONFIRMATION_COPY = {
  cs: {
    subject: (jmeno: string) => `Díky za poptávku, ${jmeno}!`,
    heading: (jmeno: string) => `Díky za poptávku, ${jmeno}!`,
    body: "Poptávku jsme přijali a už na ní pracujeme. Ozveme se vám co nejdřív s nezávazným návrhem na míru.",
    meanwhile: "Mezitím se můžete podívat na naše dosavadní práce na",
    signature: "Tým webinho",
  },
  en: {
    subject: (jmeno: string) => `We've received your inquiry, ${jmeno}!`,
    heading: (jmeno: string) => `Thanks for reaching out, ${jmeno}!`,
    body: "We've received your inquiry and we're already working on it. We'll get back to you soon with a no-obligation custom proposal.",
    meanwhile: "In the meantime, feel free to check out our work at",
    signature: "The webinho team",
  },
} as const;

export async function POST(req: Request) {
  const { jmeno, email, telefon, typ_projektu, zprava, locale } = await req.json();

  if (!jmeno || !email || !zprava) {
    return NextResponse.json({ error: "Chybí povinná pole" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Chyba při odesílání emailu" }, { status: 500 });
  }

  const lang: "cs" | "en" = locale === "en" ? "en" : "cs";
  const copy = CONFIRMATION_COPY[lang];
  const safeJmeno = escapeHtml(jmeno);
  const safeEmail = escapeHtml(email);
  const safeTelefon = escapeHtml(telefon);
  const safeTyp = escapeHtml(typ_projektu);
  const safeZprava = escapeHtml(zprava).replace(/\n/g, "<br>");

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Webinho <noreply@webinho.cz>",
      to: ["info@webinho.cz"],
      replyTo: email,
      subject: `Nová poptávka od ${jmeno}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0b1220;color:#EDEDE7;padding:40px;border-radius:16px;">
          <h2 style="color:#5b6ef5;margin-bottom:24px;font-size:24px;">Nová zpráva z webinho.cz</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tr>
              <td style="padding:10px 0;color:#9aa3b5;width:130px;">Jméno</td>
              <td style="padding:10px 0;font-weight:bold;">${safeJmeno}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#9aa3b5;">Email</td>
              <td style="padding:10px 0;"><a href="mailto:${safeEmail}" style="color:#5b6ef5;">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#9aa3b5;">Telefon</td>
              <td style="padding:10px 0;">${safeTelefon || "–"}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#9aa3b5;">Typ projektu</td>
              <td style="padding:10px 0;">${safeTyp || "–"}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#9aa3b5;">Jazyk formuláře</td>
              <td style="padding:10px 0;">${lang === "en" ? "EN" : "CS"}</td>
            </tr>
          </table>
          <div style="background:#161c2e;border-left:3px solid #5b6ef5;padding:20px;border-radius:8px;">
            <p style="color:#9aa3b5;font-size:12px;margin-bottom:8px;text-transform:uppercase;letter-spacing:1px;">Zpráva</p>
            <p style="color:#EDEDE7;line-height:1.6;margin:0;">${safeZprava}</p>
          </div>
          <p style="color:#9aa3b5;font-size:12px;margin-top:24px;">Odesláno z kontaktního formuláře webu Webinho</p>
        </div>
      `,
    });

    try {
      await resend.emails.send({
        from: "Webinho <noreply@webinho.cz>",
        to: [email],
        subject: copy.subject(jmeno),
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#06070b;color:#f2f3f7;border-radius:16px;overflow:hidden;">
            <div style="background-color:#5b6ef5;background-image:linear-gradient(135deg,#5b6ef5,#a855f7);padding:32px 40px;">
              <img src="${LOGO_URL}" alt="webinho" height="26" style="display:block;border:0;" />
            </div>
            <div style="padding:40px;">
              <h2 style="color:#f2f3f7;margin:0 0 16px;font-size:22px;">${escapeHtml(copy.heading(jmeno))}</h2>
              <p style="color:#9aa1b5;line-height:1.6;margin:0 0 16px;">${copy.body}</p>
              <p style="color:#9aa1b5;line-height:1.6;margin:0 0 28px;">
                ${copy.meanwhile} <a href="https://www.webinho.cz" style="color:#5b6ef5;text-decoration:none;">webinho.cz</a>.
              </p>
              <p style="color:#5b6ef5;font-weight:bold;margin:0;">${copy.signature}</p>
            </div>
          </div>
        `,
      });
    } catch (confirmError) {
      console.error("Resend confirmation email error:", confirmError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Chyba při odesílání emailu" }, { status: 500 });
  }
}
