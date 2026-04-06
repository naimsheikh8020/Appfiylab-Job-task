import { Link } from "react-router";
import registrationBackground from "../assets/registration.png";
import logo from "../assets/logo.svg";
import topLeftShape from "../assets/shape1.svg";
import topRightShape from "../assets/shape2.svg";
import bottomRightShape from "../assets/shape3.svg";
import { useState } from "react";
import { useRegister } from "../hooks/useRegister";


const SignUp = () => {
  const { mutate, isPending } = useRegister();

  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.email || !form.firstName || !form.lastName || !form.password) {
      alert("All fields are required");
      return;
    }

    mutate(form);
  };
  return (
    <div className="relative min-h-screen bg-gray-100 overflow-hidden flex flex-col lg:flex-row">

      {/* BACKGROUND SHAPES */}
      <img
        src={topLeftShape}
        className="absolute top-0 left-0 w-24 sm:w-32 pointer-events-none"
      />
      <img
        src={topRightShape}
        className="absolute top-0 right-0  pointer-events-none"
      />
      <img
        src={bottomRightShape}
        className="absolute bottom-0 right-0 w-90 pointer-events-none"
      />

      {/* LEFT SIDE */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-10">
        <img
          src={registrationBackground}
          alt="illustration"
          className="w-full  h-auto"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="flex w-full lg:w-1/2 items-center justify-center px-4 py-10 z-10">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">

          {/* LOGO */}
          <div className="flex justify-center mb-4">
            <img src={logo} alt="logo" className="h-8" />
          </div>

          {/* TITLE */}
          <p className="text-center text-gray-500 text-sm">
            Get started Now
          </p>
          <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-6 text-gray-800 mt-2">
            Registration
          </h2>

          {/* GOOGLE BUTTON */}
          <button className="w-full border border-gray-200 rounded-lg py-3 flex items-center justify-center gap-2 mb-4 hover:bg-gray-50 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-5 h-5"
            />
            Register with google
          </button>

          {/* DIVIDER */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-gray-400 text-sm">Or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* FORM */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm sm:text-base text-gray-600">Email</label>
              <input
                type="email"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />
            </div>

            <div>
              <label className="text-sm sm:text-base text-gray-600">First Name</label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
              />
            </div>
            <div>
              <label className="text-sm sm:text-base text-gray-600">Last Name</label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                onChange={(e) =>
                  setForm({ ...form, lastName: e.target.value })
                }
              />
            </div>

            <div>
              <label className="text-sm sm:text-base text-gray-600">Password</label>
              <input
                type="password"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
              />
            </div>

            {/* TERMS */}
            <div className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="accent-blue-600" />
              <span>
                I agree to the Terms & Conditions

              </span>
            </div>

            {/* BUTTON */}
            <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-700 transition">
              Create account
            </button>
          </form>

          {/* FOOTER */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;