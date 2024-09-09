const nodemailer = require('nodemailer');

export async function sendMail(name, subject, email, message) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.NODEMAILER_EMAIL,
    name: name,
    subject: subject,
    text: `From: ${email} \n
    ${message}`,
    // 'From: ' + email + '\n' + message,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
}
