import { sendMail } from '../../../utils/mailer';

const handler = async (req, res) => {
  const { name, subject, email, message } = req.body;

  // if (!validation) {
  //   return res
  //     .status(422)
  //     .json({ error_code: 'validation-failed', message: 'Validation failed' });
  // }

  try {
    const { method } = req;
    switch (method) {
      case 'POST':
        await sendMail(name, subject, email, message);
        return res.status(200).json({ message: 'Email sent successfully' });
      default:
        return res.status(405).json({
          error_code: 'method-not-allowed',
          message: `Method ${method} Not Allowed`,
        });
    }
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ error_code: 'server-error', message: 'Internal server error' });
  }
};

export default handler;
