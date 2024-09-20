export async function POST(request) {
  const { email, password } = await request.json();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    return new Response(JSON.stringify({ message: "Login successful", user }), {
      status: 200,
    });
  } else {
    return new Response(
      JSON.stringify({ message: "Invalid email or password" }),
      { status: 401 }
    );
  }
}
