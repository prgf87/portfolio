import { sendMail } from '../../../utils/mailer';

const handler = async (req, res) => {
  const { name, subject, email, message, validation } = req.body;
  if (!validation) {
    res.status(500).end('Not allowed');
  }
  try {
    const { method } = req;
    switch (method) {
      case 'POST': {
        await sendMail(name, subject, email, message);
        res.status(200).send('Success');
        break;
      }
      default:
        res.status(400).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err) {
    res.status(400).json({
      error_code: 'api-error',
      message: err.message,
    });
  }
};

export default handler;
