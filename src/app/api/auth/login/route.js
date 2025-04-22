// app/api/login/route.js
export async function POST(req) {
  try {
    const body = await req.json(); // Read and parse request body
    const { email, password } = body;

    // Replace this with real Auth logic if needed
    const user = { email, password };

    return Response.json({ message: 'Login successful', user }, { status: 200 });
  } catch (error) {
    return Response.json({ message: 'Login failed', error: error.message }, { status: 400 });
  }
}

// Optional: handle unsupported methods
export function GET() {
  return Response.json({ message: 'Method Not Allowed' }, { status: 405 });
}
