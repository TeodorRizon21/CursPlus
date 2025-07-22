import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { nume, email, telefon, dataIncepere, mesaj, motiv, job } = data;

    // Trimite email către utilizator
    await resend.emails.send({
      from: 'CursPlus <no-reply@cursplus.ro>',
      to: email,
      subject: 'Confirmare înscriere CursPlus',
      html: `
        <h2>Bună, ${nume}!</h2>
        <p>Îți mulțumim pentru înscrierea la cursurile CursPlus.</p>
        <p>Datele tale au fost primite cu succes. Pentru a-ți rezerva locul, te rugăm să efectuezi plata taxei de curs (600 lei) prin transfer bancar la:</p>
        <ul>
          <li><b>Beneficiar:</b> GRIZZLY DIGITAL S.R.L.</li>
          <li><b>CUI:</b> 51216735</li>
          <li><b>Cont IBAN:</b> RO49 BTRL 0000 1202 1234 56XX</li>
          <li><b>Banca:</b> Banca Transilvania</li>
          <li><b>Detalii plată:</b> Nume complet + "Curs CursPlus"</li>
        </ul>
        <p>După efectuarea plății, vei primi un email cu toate detaliile pentru participare.</p>
        <p>Pentru întrebări, răspunde la acest email sau sună la 0722 438 098.</p>
        <hr />
        <p><b>Date completate:</b></p>
        <ul>
          <li><b>Nume:</b> ${nume}</li>
          <li><b>Email:</b> ${email}</li>
          <li><b>Telefon:</b> ${telefon || '-'}</li>
          <li><b>Data începerii:</b> ${dataIncepere}</li>
          <li><b>Mesaj:</b> ${mesaj || '-'}</li>
          <li><b>Motiv înscriere:</b> ${motiv || '-'}</li>
          <li><b>Job:</b> ${job || '-'}</li>
        </ul>
        <p>Îți dorim mult succes!</p>
        <p>Echipa CursPlus</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
} 