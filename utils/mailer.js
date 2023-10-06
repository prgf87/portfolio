const nodemailer = require('nodemailer');

export async function sendMail(name, subject, email, message) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
      pass: process.env.NEXT_PUBLIC_NODEMAILER_PW,
    },
  });

  const mailOptions = {
    from: email,
    to: NEXT_PUBLIC_NODEMAILER_EMAIL,
    name: name,
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw new Error(error);
    } else {
      console.log('Email Sent');
      return true;
    }
  });
}
