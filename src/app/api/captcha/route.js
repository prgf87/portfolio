export const dynamic = 'force-dynamic';

export async function POST(req) {
  // return Response.json('Request received');
  const { token } = req.body;
  const response = await fetch(
    'https://www.google.com/recaptcha/api/siteverify',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      response: token,
      secret: process.env.RECAPTCHA_SECRET,
    }
  );
  const body = await response.json();

  if (body.success) {
    return Response.json('Success');
  } else {
    return Response.json({
      message: body['error-codes'],
    });
  }
}
