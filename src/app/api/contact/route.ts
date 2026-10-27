import { NextResponse } from "next/server";
import { Resend } from "resend";
import { PLANS_DATA } from "@/data/mockData";
import { TOOLS } from "@/data/tools";
import { renderContactAcknowledgementEmail } from "@/emails/contact-acknowledgement";
import { renderContactSubmissionEmail } from "@/emails/contact-submission";

const serviceLabels: Record<string, string> = {
  bookkeeping: "Bookkeeping",
  "document-management": "Document Management",
  "admin-support": "Administrative Support",
  other: "Not Sure Yet",
};

const txLabels: Record<string, string> = {
  "under-75": "Under 75",
  "75-250": "75 – 250",
  "250-500": "250 – 500",
  "500+": "500+",
};

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const fullName = String(body.fullName ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const company = String(body.company ?? "").trim();
  const serviceKey = String(body.service ?? "bookkeeping");
  const monthlyTxKey = String(body.monthlyTx ?? "under-75");
  const description = String(body.description ?? "").trim();
  const planId = String(body.plan ?? "");
  const sourceId = String(body.source ?? "");
  const plan = PLANS_DATA.find((p) => p.id === planId)?.name;
  const sourceTool = TOOLS.find((t) => t.slug === sourceId);
  const source = sourceTool ? `Free tool: ${sourceTool.title}` : undefined;

  if (!fullName || !email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { error: "Email service is not configured. Please try again later." },
      { status: 500 },
    );
  }
  const resend = new Resend(apiKey);
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "contact@24magic.in";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "24MAGIC <contact@24magic.in>";

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New Contact Form Submission — ${fullName}`,
      html: renderContactSubmissionEmail({
        fullName,
        email,
        phone,
        company,
        service: serviceLabels[serviceKey] ?? serviceKey,
        monthlyTx: txLabels[monthlyTxKey] ?? monthlyTxKey,
        description,
        plan,
        source,
      }),
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: "Failed to send your message. Please try again." },
        { status: 502 },
      );
    }

    // Confirmation to the visitor. A failure here must not fail the request,
    // because the team has already received the enquiry.
    try {
      const { error: ackError } = await resend.emails.send({
        from: fromEmail,
        to: [email],
        replyTo: toEmail,
        subject: "Thank you for contacting 24MAGIC",
        html: renderContactAcknowledgementEmail({
          fullName,
          reference: `24M-${Date.now().toString(36).toUpperCase()}-${crypto.randomUUID().slice(0, 4).toUpperCase()}`,
          service: serviceLabels[serviceKey] ?? serviceKey,
          description,
        }),
      });
      if (ackError) console.error("Acknowledgement email error:", ackError);
    } catch (ackErr) {
      console.error("Acknowledgement email failed:", ackErr);
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Unexpected error sending contact email:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
