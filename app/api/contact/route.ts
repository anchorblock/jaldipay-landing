import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if credentials are configured
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("Gmail credentials not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Map subject value to readable text
    const subjectMap: Record<string, string> = {
      general: "General Inquiry",
      support: "Customer Support",
      business: "Business Partnership",
      technical: "Technical Issue",
      feedback: "Feedback",
    };

    const subjectText = subjectMap[subject] || subject;
    const formattedMessage = message.replace(/\n/g, "<br>");

    // Send email
    await transporter.sendMail({
      from: `JaldiPay Contact <${process.env.GMAIL_USER}>`,
      to: "shatil@anchorblock.vc",
      replyTo: email,
      subject: `[JaldiPay] ${subjectText} from ${name}`,
      html: `<h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subjectText}</p>
        <p><strong>Message:</strong></p>
        <p>${formattedMessage}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
