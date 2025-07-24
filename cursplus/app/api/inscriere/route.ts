import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);
const ADMIN_EMAIL = process.env.ADMIN_MAIL!;
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL!;

export async function POST(req: NextRequest) {
  try {
    console.log('🟦 Procesare formular nou început');
    const data = await req.json();
    const { nume, email, telefon, dataIncepere, mesaj, motiv, job } = data;
    
    console.log('📧 Date primite:', { nume, email, telefon, dataIncepere });
    console.log('🔑 Verificare variabile de mediu:');
    console.log('- ADMIN_MAIL configurat:', !!process.env.ADMIN_MAIL);
    console.log('- RESEND_API_KEY configurat:', !!process.env.RESEND_API_KEY);
    console.log('- RESEND_FROM_EMAIL configurat:', !!process.env.RESEND_FROM_EMAIL);

    // Trimite email către administrator
    console.log('📤 Încercare trimitere email către administrator:', ADMIN_EMAIL);
    const adminEmailResult = await resend.emails.send({
      from: `CursPlus <${FROM_EMAIL}>`,
      to: ADMIN_EMAIL,
      subject: 'Înscriere nouă CursPlus',
      html: `
        <div style="font-family: Arial, sans-serif; color: #222;">
          <h2 style="color: #b91c1c;">Înscriere nouă la CursPlus!</h2>
          <p>A fost primită o nouă înscriere cu următoarele detalii:</p>
          <ul style="line-height: 1.7;">
            <li><b>Nume:</b> ${nume}</li>
            <li><b>Email:</b> ${email}</li>
            <li><b>Telefon:</b> ${telefon || '-'}</li>
            <li><b>Data începerii:</b> ${dataIncepere}</li>
            <li><b>Mesaj:</b> ${mesaj || '-'}</li>
            <li><b>Motiv înscriere:</b> ${motiv || '-'}</li>
            <li><b>Job:</b> ${job || '-'}</li>
          </ul>
        </div>
      `,
    });
    console.log('✅ Email administrator trimis cu succes:', adminEmailResult);

    // Trimite email către utilizator
    console.log('📤 Încercare trimitere email către utilizator:', email);
    const userEmailResult = await resend.emails.send({
      from: `CursPlus <${FROM_EMAIL}>`,
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
    console.log('✅ Email utilizator trimis cu succes:', userEmailResult);

    console.log('🟩 Procesare formular finalizată cu succes');
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('🟥 Eroare la procesarea formularului:', error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
} 