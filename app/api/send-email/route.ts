// /app/api/send-email/route.ts

import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  try {
    const { to, subject, text } = await req.json()

    if (!to || !subject || !text) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // must be set in your .env
        pass: process.env.EMAIL_PASS, // must be Gmail App Password, not regular password
      },
    })

    await transporter.sendMail({
      from: `"SR Lumex" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
    })

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (err: unknown) {
    console.error("Email error:", err)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
