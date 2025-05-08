import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendWelcomeEmail = async (toEmail: any, userName: String) => {
  try {
    const info = await transporter.sendMail({
      from: `"Architext" <${process.env.EMAIL_USER}>`,
      to: toEmail,
      subject: 'Welcome to Our Service!',
      html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #333;">Hi ${userName},</h2>
        <p>Welcome to <strong>Architext</strong>! We're excited to have you join our community.</p>
        <p>If you have any questions or need assistance, feel free to reply to this email — we're here to help.</p>
        <p>Cheers,<br>The Architext Team</p>
      </div>
      `,
    });

    console.log('Email sent:', info.messageId);
  } catch (err) {

    console.error('Email sending failed:', err);
  }
};

