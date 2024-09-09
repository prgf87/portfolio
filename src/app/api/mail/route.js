import { sendMail } from '../../utils/mailer';

export const dynamic = 'force-dynamic';

export async function POST(req) {
  const { name, subject, email, message } = await req.json();

  try {
    await sendMail(name, subject, email, message);
    return Response.json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error(err);
    return Response.json({
      error_code: 'server-error',
      message: 'Internal server error',
    });
  }
}
