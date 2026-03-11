import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Meno, e-mail a správa sú povinné." },
        { status: 400 }
      );
    }

    const response = await fetch("https://api.smtp2go.com/v3/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: process.env.SMTP2GO_API_KEY,
        to: [process.env.CONTACT_FORM_RECIPIENT || "svp.fidelitas@hlohovec.net"],
        sender: process.env.SMTP2GO_SENDER || "web@svpfidelitas.sk",
        subject: `Nová správa z webu od ${name}`,
        html_body: `
          <h2>Nová správa z kontaktného formulára</h2>
          <p><strong>Meno:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Telefón:</strong> ${phone || "neuvedený"}</p>
          <hr />
          <p><strong>Správa:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        `,
        text_body: `Meno: ${name}\nE-mail: ${email}\nTelefón: ${phone || "neuvedený"}\n\nSpráva:\n${message}`,
      }),
    });

    const data = await response.json();

    if (!response.ok || data.data?.error) {
      console.error("SMTP2GO error:", data);
      return NextResponse.json(
        { error: "Nepodarilo sa odoslať správu. Skúste to znova." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Interná chyba servera." },
      { status: 500 }
    );
  }
}
