import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Navbar() {
  return (
    <div className="flex items-center justify-between bg-gray-700 relative min-h-11 text-white">
      <Logo />
      <Links />
    </div>
  );
}

function Links() {
  return (
    <ul className="flex mr-6 gap-10 items-center font-bold text-xl">
      <Link to="/product">
        <li>PRODUCT</li>
      </Link>
      <Link to={"/pricing"}>
        <li>PRICING</li>
      </Link>
      <Link to={"/login"}>
        <button className="px-4 py-2 rounded-md bg-green-600 text-black">
          LOG IN
        </button>
      </Link>
    </ul>
  );
}
