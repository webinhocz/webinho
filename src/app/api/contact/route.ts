import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { jmeno, email, telefon, typ_projektu, zprava } = await req.json();

  if (!jmeno || !email || !zprava) {
    return NextResponse.json({ error: "Chybí povinná pole" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Chyba při odesílání emailu" }, { status: 500 });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Webinho <noreply@webinho.cz>",
      to: ["webinho@seznam.cz"],
      replyTo: email,
      subject: `Nová poptávka od ${jmeno}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0b1220;color:#EDEDE7;padding:40px;border-radius:16px;">
          <h2 style="color:#3654E0;margin-bottom:24px;font-size:24px;">Nová zpráva z webinho.cz</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tr>
              <td style="padding:10px 0;color:#9aa3b5;width:130px;">Jméno</td>
              <td style="padding:10px 0;font-weight:bold;">${jmeno}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#9aa3b5;">Email</td>
              <td style="padding:10px 0;"><a href="mailto:${email}" style="color:#3654E0;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#9aa3b5;">Telefon</td>
              <td style="padding:10px 0;">${telefon || "–"}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#9aa3b5;">Typ projektu</td>
              <td style="padding:10px 0;">${typ_projektu || "–"}</td>
            </tr>
          </table>
          <div style="background:#161c2e;border-left:3px solid #3654E0;padding:20px;border-radius:8px;">
            <p style="color:#9aa3b5;font-size:12px;margin-bottom:8px;text-transform:uppercase;letter-spacing:1px;">Zpráva</p>
            <p style="color:#EDEDE7;line-height:1.6;margin:0;">${String(zprava).replace(/\n/g, "<br>")}</p>
          </div>
          <p style="color:#9aa3b5;font-size:12px;margin-top:24px;">Odesláno z kontaktního formuláře webu Webinho</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Chyba při odesílání emailu" }, { status: 500 });
  }
}
