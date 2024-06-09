// app/api/send-email/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { to, subject, text } = await request.json();

  // Nodemailer transporter'ını oluşturun

  const transporter = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // E-posta seçenekleri
  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL_TO,
    subject: "PORTFOLIO: You have email request from portfolio page",
    text,
  };

  try {
    // E-posta gönder
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error: any) {
    return NextResponse.json(
      { message: `Error sending email: ${error.message}` },
      { status: 500 }
    );
  }
}
