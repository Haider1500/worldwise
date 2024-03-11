import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export function Pricing() {
  return (
    <div className="bg-gray-700 z-0 flex flex-1 flex-col">
      <Navbar />
      <Main />
    </div>
  );
}

function Main() {
  return (
    <div className="flex flex-1 justify-center items-center gap-4 sm:gap-10 mb-10">
      <div className="flex flex-col text-white gap-6 items-center w-4/12">
        <span>
          <h2 className="font-bold text-2xl">Simple Pricing.</h2>
          <h2 className="font-bold text-2xl">Just $9/month.</h2>
        </span>
        <p>
          mollis neque non hendrerit pellentesque. Sed maximus, orci id pharetra
          rhoncus, enim tortor dictum leo, vel lacinia arcu purus sit amet nisi.
          In imperdiet, lorem non vulputate faucibus, lectus felis congue urna,
        </p>
        <Link to="/login">
          <button className="bg-green-600 px-6 py-2 rounded-lg text-sm text-black font-semibold">
            START TRACKING NOW
          </button>
        </Link>
      </div>
      <img
        src="./src/assets/travel2.jpeg"
        alt=""
        className="object-contain w-5/12 sm:w-5/12"
      />
    </div>
  );
}
