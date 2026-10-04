import { Resend } from "resend";
import { NextResponse } from "next/server";

// Inquiries go to Lukáš's inbox; pribyla@webinho.cz is the address shown publicly.
const INBOX = "pribyla.l@yahoo.com";
const FROM = "Webinho <noreply@webinho.cz>";
const LOGO_URL = "https://www.webinho.cz/brand/webinho-logo-white.png";

function escapeHtml(value: unknown): string {
  return String(value ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!)
  );
}

function row(label: string, value: string) {
  return `<tr><td style="padding:10px 0;color:#9a9a9a;width:140px;vertical-align:top;">${label}</td><td style="padding:10px 0;font-weight:600;">${value}</td></tr>`;
}

export async function POST(req: Request) {
  const { jmeno, telefon, sluzba, email, zprava, urgentni, web } = await req.json();

  // honeypot filled in: pretend success, send nothing
  if (web) return NextResponse.json({ success: true });

  if (!String(jmeno ?? "").trim() || !String(telefon ?? "").trim() || !String(sluzba ?? "").trim()) {
    return NextResponse.json({ error: "Chybí povinná pole" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Chyba při odesílání emailu" }, { status: 500 });
  }

  const hasEmail = typeof email === "string" && /^\S+@\S+\.\S+$/.test(email.trim());
  const safe = {
    jmeno: escapeHtml(jmeno),
    telefon: escapeHtml(telefon),
    sluzba: escapeHtml(sluzba),
    email: hasEmail ? escapeHtml(email.trim()) : "",
    zprava: escapeHtml(zprava).replace(/\n/g, "<br>"),
  };

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    // the Resend SDK reports failures in `error` instead of throwing
    const { error: sendError } = await resend.emails.send({
      from: FROM,
      to: [INBOX],
      replyTo: hasEmail ? email.trim() : undefined,
      subject: `${urgentni ? "[SPĚCHÁ] " : ""}Nová poptávka: ${sluzba} od ${jmeno}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#010101;color:#FDFDFD;padding:40px;border-radius:16px;">
          <h2 style="color:#FDFDFD;margin:0 0 24px;font-size:22px;">Nová poptávka z webinho.cz</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            ${row("Jméno", safe.jmeno)}
            ${row("Telefon", `<a href="tel:${safe.telefon.replace(/\s/g, "")}" style="color:#4d86ff;">${safe.telefon}</a>`)}
            ${row("S čím pomoct", safe.sluzba)}
            ${row("Spěchá", urgentni ? "Ano" : "Ne")}
            ${row("E-mail", safe.email ? `<a href="mailto:${safe.email}" style="color:#4d86ff;">${safe.email}</a>` : "–")}
          </table>
          ${
            safe.zprava
              ? `<div style="background:#080b18;border-left:3px solid #014FFA;padding:20px;border-radius:8px;">
                  <p style="color:#9a9a9a;font-size:12px;margin:0 0 8px;text-transform:uppercase;letter-spacing:1px;">Zpráva</p>
                  <p style="line-height:1.6;margin:0;">${safe.zprava}</p>
                </div>`
              : ""
          }
        </div>
      `,
    });
    if (sendError) throw sendError;

    if (hasEmail) {
      try {
        await resend.emails.send({
          from: FROM,
          to: [email.trim()],
          replyTo: "pribyla@webinho.cz",
          subject: `Díky za zprávu, ${jmeno}`,
          html: `
            <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#010101;color:#FDFDFD;border-radius:16px;overflow:hidden;">
              <div style="background:#03134E;padding:32px 40px;">
                <img src="${LOGO_URL}" alt="webinho" height="26" style="display:block;border:0;" />
              </div>
              <div style="padding:40px;">
                <h2 style="margin:0 0 16px;font-size:22px;">Díky za zprávu, ${safe.jmeno}.</h2>
                <p style="color:#bdbdbd;line-height:1.6;margin:0 0 16px;">Poptávka dorazila. Do 24 hodin se vám ozvu, probereme, co potřebujete, a pak vám připravím nabídku na míru.</p>
                <p style="color:#bdbdbd;line-height:1.6;margin:0 0 28px;">Pokud to spěchá, zavolejte mi na <a href="tel:+420602557015" style="color:#4d86ff;text-decoration:none;">+420 602 557 015</a>.</p>
                <p style="font-weight:bold;margin:0;">Lukáš Přibyla, Webinho</p>
              </div>
            </div>
          `,
        });
      } catch (confirmError) {
        console.error("Resend confirmation email error:", confirmError);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Chyba při odesílání emailu" }, { status: 500 });
  }
}
