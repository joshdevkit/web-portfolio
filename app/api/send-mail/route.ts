// route.ts
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, message } = body;

    const transporter = nodemailer.createTransport({
      service: process.env.NEXT_EMAIL_SERVICE,
      auth: {
        user: process.env.NEXT_EMAIL_USER,
        pass: process.env.NEXT_EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.NEXT_EMAIL_USER,
      subject: `New message from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`, // HTML version of email body
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
