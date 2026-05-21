const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { jmeno, email, telefon, typ_projektu, zprava } = req.body;

  if (!jmeno || !email || !zprava) {
    return res.status(400).json({ error: 'Chybí povinná pole' });
  }

  try {
    await resend.emails.send({
      from: 'Webinho <onboarding@resend.dev>',
      to: ['webinho@seznam.cz'],
      reply_to: email,
      subject: `Nová poptávka od ${jmeno}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#070B09;color:#EDEDE7;padding:40px;border-radius:16px;">
          <h2 style="color:#00C752;margin-bottom:24px;font-size:24px;">Nová zpráva z webinho.vercel.app</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tr>
              <td style="padding:10px 0;color:#798B7F;width:130px;">Jméno</td>
              <td style="padding:10px 0;font-weight:bold;">${jmeno}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#798B7F;">Email</td>
              <td style="padding:10px 0;"><a href="mailto:${email}" style="color:#00C752;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#798B7F;">Telefon</td>
              <td style="padding:10px 0;">${telefon || '–'}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#798B7F;">Typ projektu</td>
              <td style="padding:10px 0;">${typ_projektu || '–'}</td>
            </tr>
          </table>
          <div style="background:#161F17;border-left:3px solid #00C752;padding:20px;border-radius:8px;">
            <p style="color:#798B7F;font-size:12px;margin-bottom:8px;text-transform:uppercase;letter-spacing:1px;">Zpráva</p>
            <p style="color:#EDEDE7;line-height:1.6;margin:0;">${zprava.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="color:#798B7F;font-size:12px;margin-top:24px;">Odesláno z kontaktního formuláře webu Webinho</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Chyba při odesílání emailu' });
  }
};
