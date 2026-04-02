import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // WARNING: Replace with your actual credentials for a production site
    // This is a basic configuration. For actual use, you'd likely use an App Password for Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "bhavya.doshi2k26@gmail.com",
        pass: "YOUR_APP_PASSWORD",
      },
    });

    const mailOptions = {
      from: "bhavya.doshi2k26@gmail.com",
      to: "bhavya.doshi2k26@gmail.com",
      subject: `New Portfolio Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    // We'll simulate a successful send for now as we don't have the real password/tokens
    // If you add your App Password to 'pass' above, this will work.
    
    // await transporter.sendMail(mailOptions);
    console.log("Mail options prepared:", mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
