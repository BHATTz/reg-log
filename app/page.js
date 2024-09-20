"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-4">
      <h1 className="text-3xl font-bold">
        Welcome to the Authentication System
      </h1>
      <div className="flex space-x-4">
        <button
          onClick={() => navigateTo("/login")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login
        </button>
        <button
          onClick={() => navigateTo("/register")}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Register
        </button>
      </div>
    </div>
  );
}
