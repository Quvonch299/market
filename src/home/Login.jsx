import { AiOutlineClose } from "react-icons/ai";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Login({setOnclose}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative bg-white shadow-lg p-8 rounded-2xl w-full max-w-sm">

        <button className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl">
          <AiOutlineClose onClick={setOnclose} />
        </button>

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login to your account
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Login
          </button>
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-1  border py-2 rounded-lg "
          >
            <span><FcGoogle /></span> Google bilan Davom etish
          </button>
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-1  border py-2 rounded-lg "
          >
            <span><FaTwitter /></span>Twitter bilan Davom etish
          </button>
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-1  border py-2 rounded-lg "
          >
            <span><FaFacebook /></span>Twitter bilan Davom etish
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?
          <a className="text-indigo-600 font-medium hover:underline" href="#"> Sign up</a>
        </p>

      </div>
    </div>
  );
}
