import { Link, Route, Routes } from "react-router-dom";
import { Logo } from "./components/Logo";
import { CitiesBox } from "./CitiesBox";
import { CountriesBox } from "./CountriesBox";
import { Button } from "./Button";

// vim key bindings
export function SideBar() {
  return (
    <div className="bg-gray-700 flex flex-col items-center w-6/12 sm:w-4/12 gap-4 relative">
      <Logo />
      <div className="">
        <Link to={"/cities"}>
          <Button>CITIES</Button>
        </Link>
        <Link to={"/countries"}>
          <Button>COUNTRIES</Button>
        </Link>
      </div>
      <Routes>
        <Route path="/cities" element={<CitiesBox />}></Route>
        <Route path="/countries" element={<CountriesBox />}></Route>
      </Routes>
      <p className="absolute bottom-10">
        &copy; Copyrights 2023 by WorldWise inc
      </p>
    </div>
  );
}
