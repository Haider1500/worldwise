import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";

const url = "./src/assets/worldwise-bg.jpg";

export function Home() {
  return (
    <div className="flex flex-col w-full h-full relative text-white bg-gray-900 opacity-80">
      <Background />
      {/* <Navbar /> */}
      <Main />
    </div>
  );
}

function Background() {
  return (
    <div
      className="absolute w-full bg-no-repeat bg-cover bg-black inset-0 opacity-60
    "
      style={{ backgroundImage: `url("${url}")` }}
    />
  );
}

function Main() {
  return (
    <div className="relative flex flex-col flex-1 self-center items-center justify-center  gap-10 w-3/4 text-4xl">
      <h2>You travel the world.</h2>
      <h2>WorldWise keeps the track of your adventures.</h2>
      <p className="text-2xl text-center">
        A world map that tracks your footsteps into evry city you can think of.
        Never forget your wonderful experices, and show your friends how you
        have wondered the world.
      </p>
      <Link to={"/login"}>
        <button className="bg-green-600 px-6 py-2 rounded-lg text-2xl text-black font-bold">
          START TRACKING NOW
        </button>
      </Link>
    </div>
  );
}
