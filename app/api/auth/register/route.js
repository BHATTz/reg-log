export async function POST(request) {
  const { name, email, password } = await request.json();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const userExists = users.find((user) => user.email === email);

  if (userExists) {
    return new Response(JSON.stringify({ message: "User already exists" }), {
      status: 409,
    });
  }

  const newUser = { name, email, password };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  return new Response(
    JSON.stringify({ message: "Registration successful", user: newUser }),
    { status: 201 }
  );
}
