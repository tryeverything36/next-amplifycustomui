// app/api/register/route.js
export async function POST(req) {
  try {
    const body = await req.json(); // Parse the JSON body from the request
    const { email, password, fullName } = body;

    // You would typically create the user here using your database or AWS Amplify
    // Mock user registration for demo purposes
    const newUser = { email, password, fullName };

    // For real implementation, use AWS Amplify or another service to register the user.
    // Example: const user = await Auth.signUp({ username: email, password, attributes: { email, fullName }});

    return Response.json({ message: 'Registration successful', user: newUser }, { status: 201 });
  } catch (error) {
    return Response.json({ message: 'Registration failed', error: error.message }, { status: 400 });
  }
}

// Optional: handle unsupported methods
export function GET() {
  return Response.json({ message: 'Method Not Allowed' }, { status: 405 });
}
