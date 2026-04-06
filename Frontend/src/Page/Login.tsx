import { useState } from "react";
import { Link } from "react-router";
import { useLogin } from "../hooks/useLogin";

import loginBackground from "../assets/login.png";
import logo from "../assets/logo.svg";
import topLeftShape from "../assets/shape1.svg";
import topRightShape from "../assets/shape2.svg";
import bottomRightShape from "../assets/shape3.svg";

const Login = () => {
  const { mutate, isPending } = useLogin();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Email and password required");
      return;
    }

    mutate(form);
  };

  return (
    <div className="relative min-h-screen bg-gray-100 overflow-hidden flex flex-col lg:flex-row">
      
      {/* BACKGROUND SHAPES */}
      <img src={topLeftShape} className="absolute top-0 left-0 w-24 pointer-events-none" />
      <img src={topRightShape} className="absolute top-0 right-0 w-32 pointer-events-none" />
      <img src={bottomRightShape} className="absolute bottom-0 right-0 w-40 pointer-events-none" />

      {/* LEFT */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-10">
        <img src={loginBackground} className="w-full max-w-lg" />
      </div>

      {/* RIGHT */}
      <div className="flex w-full lg:w-1/2 items-center justify-center px-4 py-10 z-10">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">

          {/* LOGO */}
          <div className="flex justify-center mb-4">
            <img src={logo} className="h-8" />
          </div>

          <p className="text-center text-gray-500 text-sm">
            Welcome back
          </p>

          <h2 className="text-center text-2xl font-semibold mb-6 text-gray-800 mt-2">
            Login to your account
          </h2>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input
                type="password"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
              {isPending ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Dont have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Create New Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;