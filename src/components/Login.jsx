import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";

export function Login() {
  return (
    <div className="bg-gray-700 w-full flex flex-1 flex-col items-center ">
      <Navbar />
      <div className="bg-gray-500 min-h-60 min-w-80 p-10 grid grid-cols-1 my-auto gap-4 rounded-md">
        <div>
          <label htmlFor="email" className="text-white block">
            Email Address
          </label>
          <input
            type="text"
            id="email"
            value="ali@gmail.com"
            className="w-full py-2 px-4 bg-white text-black rounded-md"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-white block">
            Password
          </label>
          <input
            type="password"
            id="password"
            value="alihaider"
            className="w-full py-2 px-4 bg-white  text-black rounded-md outline-slate-500"
          />
        </div>
        <Link to={"/app"}>
          <button className="bg-green-600 hover:bg-green-700 text-black font-semibold text-sm py-1 px-4 rounded">
            LOGIN
          </button>
        </Link>
      </div>
    </div>
  );
}
