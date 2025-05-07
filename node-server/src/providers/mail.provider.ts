import nodemailer from 'nodemailer';

export const sendWelcomeEmail = async (to: string, name: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_EMAIL,
    to,
    subject: 'Welcome to Architext',
    html: `<h3>Hello ${name}!</h3><p>Welcome to our service. We're glad to have you.</p>`,
  });
};
