import { Resend } from "resend";
import { NextResponse } from "next/server";

// Where contact form messages are delivered. Set CONTACT_TO_EMAIL to override;
// separate several addresses with commas to send to more than one person.
const CONTACT_TO = (process.env.CONTACT_TO_EMAIL || "mtandaoassociates@gmail.com,mtandaoinstituteoftechnology@gmail.com")
  .split(",")
  .map((address) => address.trim())
  .filter(Boolean);

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("Contact form: RESEND_API_KEY is not set, so the message was not sent.");
    return NextResponse.json({ error: "Email is not configured" }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: "Mtandao Website <enquiries@mtandaoassociates.com>", // domain must be verified in Resend
    to: CONTACT_TO,
    replyTo: email,
    subject: `New enquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "not given"}\n\nMessage:\n${message}`,
  });

  if (error) {
    console.error("Contact form: Resend rejected the message.", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
