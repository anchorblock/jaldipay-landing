import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

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

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Initialize Resend client lazily
    const resend = new Resend(process.env.RESEND_API_KEY);

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
    const { error } = await resend.emails.send({
      from: "JaldiPay Contact <onboarding@resend.dev>",
      to: "shatil@anchorblock.vc",
      replyTo: email,
      subject: "[JaldiPay] " + subjectText + " from " + name,
      html: "<h2>New Contact Form Submission</h2><p><strong>Name:</strong> " + name + "</p><p><strong>Email:</strong> " + email + "</p><p><strong>Subject:</strong> " + subjectText + "</p><p><strong>Message:</strong></p><p>" + formattedMessage + "</p>",
    });

    if (error) {
      console.error("Failed to send email:", error);
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
