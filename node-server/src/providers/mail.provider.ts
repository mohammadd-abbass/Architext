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


// export const sendWelcomeEmail = async (to: string, name: string) => {
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         type: 'OAuth2',
//         user: process.env.SMTP_EMAIL,
//         clientId: process.env.OAUTH_CLIENTID,
//         clientSecret: process.env.OAUTH_CLIENT_SECRET,
//         refreshToken: process.env.OAUTH_REFRESH_TOKEN,
//         accessToken: process.env.OAUTH_ACCESS_TOKEN,
//       },
//     });
  
//     try {
//       await transporter.sendMail({
//         from: `"Architext" <${process.env.SMTP_EMAIL}>`,
//         to,
//         subject: 'Welcome to Architext',
//         html: `<h3>Hello ${name}!</h3><p>Welcome to our service. We're glad to have you.</p>`,
//       });
//     } catch (error) {
//       console.error('Email sending error:', error);
//       throw new Error('Failed to send welcome email');
//     }
//   };