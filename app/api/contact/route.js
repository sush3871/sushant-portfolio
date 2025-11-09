import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, number, subject, message } = await req.json();

    // Construct email
    await resend.emails.send({
      from: process.env.MAIL_USER || "Sushant Shirke <onboarding@resend.dev>",
      to: process.env.MAIL_TO || "sushshirke96@gmail.com",
      subject: `New message from ${name}: ${subject}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Number:</strong> ${number}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({
      success: false,
      error: error.message || "Failed to send email",
    });
  }
}
