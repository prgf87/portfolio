import { sendMail } from '../../../utils/mailer';

const handler = async (req, res) => {
  // console.log(req.body);
  const { name, subject, email, message, validation } = req.body;
  console.log(name, email, subject, message, validation);

  // console.log(name, subject, email, message);
  // res.status(200).send('Success');

  // try {
  //   const { method } = req;
  //   switch (method) {
  //     case 'POST': {
  //       //Do some thing
  //       await sendMail(name, subject, email, message);
  //       res.status(200).send('Success');
  //       break;
  //     }
  //     // case 'GET': {
  //     //   //Do some thing
  //     //   res.status(200).send(req.auth_data);
  //     //   break;
  //     // }
  //     default:
  //       // res.setHeader('Allow', ['POST', 'GET', 'PUT', 'DELETE']);
  //       res.status(400).end(`Method ${method} Not Allowed`);
  //       break;
  //   }
  // } catch (err) {
  //   res.status(400).json({
  //     error_code: 'api-error',
  //     message: err.message,
  //   });
  // }
};

export default handler;
