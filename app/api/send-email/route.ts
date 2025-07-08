// /app/api/send-email/route.ts
import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  try {
    console.log("🔍 Starting email send process...")
    
    const { to, subject, text } = await req.json()
    console.log("📧 Email details:", { to, subject, textLength: text?.length })
    
    if (!to || !subject || !text) {
      console.log("❌ Missing required fields")
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Check environment variables
    console.log("🔑 Checking environment variables...")
    console.log("EMAIL_USER:", process.env.EMAIL_USER ? "✅ Set" : "❌ Missing")
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "✅ Set" : "❌ Missing")
    
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log("❌ Missing email credentials")
      return NextResponse.json({ error: "Email credentials not configured" }, { status: 500 })
    }

    // Try multiple SMTP configurations
    const configs = [
      { host: "mail.srlumex.com", port: 587, secure: false },
      { host: "mail.srlumex.com", port: 465, secure: true },
      { host: "mail.srlumex.com", port: 25, secure: false },
    ]

    for (const config of configs) {
      try {
        console.log(`🔄 Trying SMTP config: ${config.host}:${config.port} (secure: ${config.secure})`)
        
        const transporter = nodemailer.createTransport({
          ...config,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
          tls: {
            rejectUnauthorized: false,
          },
          connectionTimeout: 10000,
          socketTimeout: 10000,
        })

        console.log("🔍 Testing SMTP connection...")
        await transporter.verify()
        console.log("✅ SMTP connection successful!")

        console.log("📤 Sending email...")
        const result = await transporter.sendMail({
          from: `"SR Lumex" <${process.env.EMAIL_USER}>`,
          to,
          subject,
          text,
        })
        
        console.log("✅ Email sent successfully:", result.messageId)
        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
        
      } catch (configError) {
        console.log(`❌ Config ${config.host}:${config.port} failed:`)
        console.error(configError)
        continue
      }
    }

    throw new Error("All SMTP configurations failed")
    
  } catch (err: unknown) {
    console.error("❌ Email API error:", err)
    
    if (err instanceof Error) {
      console.error("Error name:", err.name)
      console.error("Error message:", err.message)
      console.error("Error stack:", err.stack)
    }
    
    return NextResponse.json({ 
      error: "Failed to send email", 
      details: err instanceof Error ? err.message : "Unknown error" 
    }, { status: 500 })
  }
}