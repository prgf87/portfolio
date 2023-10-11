export default async function handler(req, res) {
  const { token } = req.body;
  const response = await fetch(
    'https://www.google.com/recaptcha/api/siteverify',
    {
      method: 'POST',
      secret: process.env.RECAPTCHA_SECRET,
      response: token,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  if (response.status === 200) {
    return res.status(200).send({ message: 'Success' });
  } else {
    return res
      .status(402)
      .send({ message: "That didn't work, please try again" });
  }
}
