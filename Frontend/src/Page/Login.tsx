import { Link } from "react-router";
import loginBackground from "../assets/login.png";
import logo from "../assets/logo.svg";
import topLeftShape from "../assets/shape1.svg";
import topRightShape from "../assets/shape2.svg";
import bottomRightShape from "../assets/shape3.svg";

const Login = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 overflow-hidden flex">

      {/* BACKGROUND SHAPES */}
      <img
        src={topLeftShape}
        className="absolute top-0 left-0 w-30  pointer-events-none"
      />
      <img
        src={topRightShape}
        className="absolute top-0 right-0  pointer-events-none"
      />
      <img
        src={bottomRightShape}
        className="absolute bottom-0 right-100  pointer-events-none"
      />

      {/* LEFT SIDE (CENTERED ILLUSTRATION) */}
      <div className="hidden lg:flex lg:w-1/2 h-screen items-center justify-center">
        <img
          src={loginBackground}
          alt="illustration"
          className="max-w-[70%] h-auto "
        />
      </div>

      {/* RIGHT SIDE (FORM) */}
      <div className="flex w-full lg:w-1/2 items-center justify-center px-4 z-10">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 lg:ml-[-80px]">

          {/* LOGO */}
          <div className="flex justify-center mb-4">
            <img src={logo} alt="logo" className="h-8" />
          </div>

          {/* TITLE */}
          <p className="text-center text-gray-500 text-sm">
            Welcome back
          </p>
          <h2 className="text-center text-3xl font-semibold mb-6 text-gray-800 mt-2">
            Login to your account
          </h2>

          {/* GOOGLE BUTTON */}
          <button className="w-full border border-gray-200 rounded-lg py-3 flex items-center justify-center gap-2 mb-4 hover:bg-gray-50 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-5 h-5"
            />
            Or sign-in with google
          </button>

          {/* DIVIDER */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-gray-400 text-sm">Or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* FORM */}
          <form className="space-y-6">
            <div>
              <label className="text-lg text-gray-600">Email</label>
              <input
                type="email"

                className="w-full border border-gray-200 rounded-lg px-4 py-3 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-lg text-gray-600">Password</label>
              <input
                type="password"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* REMEMBER + FORGOT */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-base">
                <input type="radio" className="accent-blue-600" />
                Remember me
              </label>
              <button
                type="button"
                className="text-blue-500 hover:underline text-base"
              >
                Forgot password?
              </button>
            </div>

            {/* LOGIN BUTTON */}
            <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-700 transition cursor-pointer">
              Login now
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Dont have an account?{" "}
            <Link to="/signup">
              <span className="text-blue-500 cursor-pointer hover:underline">
                Create New Account
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;