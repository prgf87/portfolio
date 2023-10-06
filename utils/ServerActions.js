import axios from 'axios';

export async function verifyCaptcha(token) {
  console.log(token, 'TOKEN#################');
  const res = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SECRET}&response=${token}`
  );
  if (res.data.success) {
    return 'success!';
  } else {
    throw new Error('Failed Captcha');
  }
}
