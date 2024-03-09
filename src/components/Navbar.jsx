import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-transparent relative p-2 min-h-11 text-white w-full">
      <Logo />
      <Links />
    </nav>
  );
}

function Links() {
  return (
    <ul className="flex mr-6 gap-6 items-center font-semibold md:font-bold text-sm sm:text-md">
      <Link to={"/product"}>PRODUCT</Link>
      <Link to={"/pricing"}>PRICING</Link>
      <Link to={"/login"}>
        <button className="px-4 py-2 rounded-md bg-green-600 text-black">
          LOG IN
        </button>
      </Link>
    </ul>
  );
}
