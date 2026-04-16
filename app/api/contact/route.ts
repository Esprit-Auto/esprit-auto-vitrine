import { NextRequest, NextResponse } from "next/server";

interface ContactBody {
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  prestation: string;
  message: string;
}

const BREVO_URL = "https://api.brevo.com/v3/smtp/email";
const GARAGE_EMAIL = "esprit.auto38160@gmail.com";
const SENDER = { name: "Esprit Auto - Site Web", email: "esprit.auto38160@gmail.com" };

function sendBrevoEmail(apiKey: string, payload: Record<string, unknown>) {
  return fetch(BREVO_URL, {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { success: false, message: "Configuration serveur manquante." },
      { status: 500 }
    );
  }

  let body: ContactBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Données invalides." },
      { status: 400 }
    );
  }

  const { nom, prenom, telephone, email, prestation, message } = body;

  if (!nom || !prenom || !telephone || !email || !message) {
    return NextResponse.json(
      { success: false, message: "Tous les champs sont requis." },
      { status: 400 }
    );
  }

  const prestationText = prestation || "Non précisée";
  const messageHtml = message.replace(/\n/g, "<br>");

  // Email 1 — notification au garage
  const notificationPayload = {
    sender: SENDER,
    to: [{ email: GARAGE_EMAIL, name: "Esprit Auto" }],
    replyTo: { email, name: `${prenom} ${nom}` },
    subject: `Nouveau message depuis le site — ${nom}`,
    htmlContent: `
      <h2>Nouveau message depuis le site Esprit Auto</h2>
      <p><strong>Nom :</strong> ${nom} ${prenom}</p>
      <p><strong>Téléphone :</strong> ${telephone}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Prestation :</strong> ${prestationText}</p>
      <p><strong>Message :</strong></p>
      <p>${messageHtml}</p>
    `,
  };

  // Email 2 — confirmation à l'utilisateur
  const confirmationPayload = {
    sender: SENDER,
    to: [{ email, name: `${prenom} ${nom}` }],
    replyTo: { email: GARAGE_EMAIL, name: "Esprit Auto" },
    subject: "Votre demande a bien été reçue — Esprit Auto Saint-Marcellin",
    htmlContent: `
      <div style="font-family:'DM Sans',Helvetica,Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
        <div style="text-align:center;padding:24px 0;border-bottom:2px solid #D4521A">
          <h1 style="font-family:'Bebas Neue',Helvetica,sans-serif;font-size:28px;color:#D4521A;margin:0;letter-spacing:2px">ESPRIT AUTO</h1>
          <p style="font-size:11px;color:#888;letter-spacing:3px;text-transform:uppercase;margin:4px 0 0">Carrosserie · Vitrage · Mécanique</p>
        </div>

        <div style="padding:32px 24px">
          <p style="font-size:16px;margin:0 0 16px">Bonjour <strong>${prenom}</strong>,</p>

          <p style="font-size:14px;line-height:1.7;margin:0 0 16px">
            Nous avons bien reçu votre demande et reviendrons vers vous dans les <strong>48h</strong>.
          </p>

          <div style="background:#f8f8f8;border-left:3px solid #D4521A;padding:16px 20px;border-radius:4px;margin:24px 0">
            <p style="font-size:13px;margin:0 0 8px"><strong>Prestation demandée :</strong> ${prestationText}</p>
            <p style="font-size:13px;margin:0 0 8px"><strong>Votre message :</strong></p>
            <p style="font-size:13px;margin:0;color:#555">${messageHtml}</p>
          </div>

          <p style="font-size:14px;line-height:1.7;margin:24px 0 8px">
            En cas d'urgence, n'hésitez pas à nous appeler directement :
          </p>
          <p style="font-size:14px;margin:0 0 4px">
            📞 <a href="tel:+33763766431" style="color:#D4521A;text-decoration:none;font-weight:600">07 63 76 64 31</a>
          </p>
          <p style="font-size:13px;color:#888;margin:0">
            📍 ZA Les Échavagnes, 38160 Saint-Marcellin
          </p>
        </div>

        <div style="border-top:1px solid #eee;padding:20px 24px;text-align:center">
          <p style="font-size:14px;margin:0 0 4px">Cordialement,</p>
          <p style="font-size:14px;margin:0;font-weight:600;color:#D4521A">L'équipe Esprit Auto</p>
        </div>
      </div>
    `,
  };

  try {
    const [notifRes, confirmRes] = await Promise.all([
      sendBrevoEmail(apiKey, notificationPayload),
      sendBrevoEmail(apiKey, confirmationPayload),
    ]);

    if (!notifRes.ok || !confirmRes.ok) {
      return NextResponse.json(
        { success: false, message: "Erreur lors de l'envoi de l'email." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message envoyé avec succès !",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Erreur serveur." },
      { status: 500 }
    );
  }
}
