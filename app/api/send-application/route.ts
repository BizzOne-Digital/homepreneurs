import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json();
  const { name, email, phone, city, province, business, looking, timeline, reach, quizAnswers, referredBy } = data;

  if (!name || (!email && !phone)) {
    return NextResponse.json({ error: "Name and at least an email or phone number are required." }, { status: 400 });
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const toEmail = process.env.TO_EMAIL || smtpUser;

  if (!smtpUser || !smtpPass) {
    console.error("error: SMTP_USER / SMTP_PASS not configured — application email not sent.", data);
    return NextResponse.json({ error: "Email is not configured yet. Application was not sent." }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: smtpUser, pass: smtpPass },
  });

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email || "—"],
    ["Phone", phone || "—"],
    ["City", city || "—"],
    ["Province/State", province || "—"],
    ["Business of Interest", business || "—"],
    ["How long looking to invest", looking || "—"],
    ["Ready to start", timeline || "—"],
    ["Preferred contact method", reach || "—"],
    ["Referred By", referredBy || "Direct / Unknown"],
  ];

  const html = `
    <h2>New Homepreneurs™ Application</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      ${rows.map(([k, v]) => `<tr><td style="font-weight:bold;border-bottom:1px solid #eee">${k}</td><td style="border-bottom:1px solid #eee">${v}</td></tr>`).join("")}
    </table>
    ${quizAnswers ? `<h3>Quiz Answers</h3><p>${quizAnswers}</p>` : ""}
  `;

  try {
    const info = await transporter.sendMail({
      from: smtpUser,
      to: toEmail,
      ...(email ? { replyTo: email } : {}),
      subject: `New Application — ${business || "Homepreneurs"} (${name})${referredBy ? ` [via ${referredBy}]` : ""}`,
      html,
    });
    console.log(`send: application email sent to ${toEmail} (messageId: ${info.messageId}) — ${name} / ${business || "no business selected"}`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(`error: failed to send application email for ${name} (${email}) —`, err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
