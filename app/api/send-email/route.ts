// import { NextRequest, NextResponse } from 'next/server'
// import nodemailer from 'nodemailer'

// export async function POST(request: NextRequest) {
//   try {
//     const { to, subject, text } = await request.json()

//     // Create transporter (using Gmail as example)
//     const transporter = nodemailer.createTransporter({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER, // Your email
//         pass: process.env.EMAIL_PASS, // Your app password
//       },
//     })

//     // Send email
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to,
//       subject,
//       text,
//     })

//     return NextResponse.json({ message: 'Email sent successfully' })
//   } catch (error) {
//     console.error('Error sending email:', error)
//     return NextResponse.json(
//       { error: 'Failed to send email' },
//       { status: 500 }
//     )
//   }
// }