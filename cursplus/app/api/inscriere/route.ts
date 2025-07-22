import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { nume, email, telefon, dataIncepere, mesaj, motiv, job } = data;

    // Trimite email către utilizator
    await resend.emails.send({
      from: 'CursPlus <grizzlymediapro@gmail.ro>',
      to: email,
      subject: 'Confirmare înscriere CursPlus',
      html: `
        <div style="font-family: Arial, sans-serif; color: #222;">
          <h2 style="color: #b91c1c;">Salut, ${nume}!</h2>
          <p>Îți mulțumim pentru înscrierea la <b>CursPlus</b>! Datele tale au fost primite cu succes.</p>
          <p style="margin-top: 1.5em; font-weight: bold;">Pentru a-ți rezerva locul la curs, te rugăm să efectuezi plata taxei de <span style='color:#b91c1c;'>600 lei</span> prin transfer bancar la:</p>
          <div style="background: #f3f4f6; padding: 1em; border-radius: 8px; margin: 1em 0;">
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li><b>Beneficiar:</b> GRIZZLY DIGITAL S.R.L.</li>
              <li><b>CUI:</b> 51216735</li>
              <li><b>Cont IBAN:</b> <span style='color:#b91c1c;'>RO89 BACX 0000 0028 0683 0000</span></li>
              <li><b>Banca:</b> UniCredit</li>
              <li><b>Detalii plată:</b> Nume complet + "Curs - Adaptare la viitorul digital"</li>
              <li><b>Suma:</b> 600 lei</li>
            </ul>
          </div>
          <p style="margin-bottom: 1.5em;">După efectuarea plății, vei primi un email cu toate detaliile pentru participare. Dacă ai întrebări, răspunde la acest email sau sună la <b>0722 438 098</b>.</p>
          <hr style="margin:2em 0;" />
          <p style="font-size: 1.1em; font-weight: bold;">Datele tale completate:</p>
          <ul style="line-height: 1.7;">
            <li><b>Nume:</b> ${nume}</li>
            <li><b>Email:</b> ${email}</li>
            <li><b>Telefon:</b> ${telefon || '-'}</li>
            <li><b>Data începerii:</b> ${dataIncepere}</li>
            <li><b>Mesaj:</b> ${mesaj || '-'}</li>
            <li><b>Motiv înscriere:</b> ${motiv || '-'}</li>
            <li><b>Job:</b> ${job || '-'}</li>
          </ul>
          <p style="margin-top:2em;">Îți dorim mult succes și te așteptăm cu drag la curs!<br /><b>Echipa CursPlus</b></p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
} 