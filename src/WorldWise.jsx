//40% app box containing cities and countries visited
// countries and cities should have different routes
// city box should be smaller containing city flag, name and date and x button to delete it
// countries with slightly larger box but no date written there
// when we click the city map itself moves there and a card is displayed containing the info we put there

import { Link, Route, Routes } from "react-router-dom";
import { Logo } from "./components/Logo";

// other 60% is map using the geolocation api can search our own location
// select the place and include in the list of cities by fetching the name using the external api. when did we go there so a date is fetched for that.
// a marker is placed on the map for that we can click it and cross it also

// a logout button is displayed at the top right of the screen with a random avatar and welcome msg
const cityData = [
  {
    name: "Lisbon",
    flag: "",
    date: "august,2,2021",
  },
  {
    name: "Madrid",
    flag: "",
    date: "july,4,2021",
  },
];
const countryData = [
  {
    name: "Portugal",
    flag: "",
  },
  {
    name: "Spain",
    flag: "",
  },
  {
    name: "Italy",
    flag: "",
  },
  {
    name: "Iran",
    flag: "",
  },
];

export function WorldWise() {
  return (
    <div className="flex flex-1 text-white">
      <AppInterface />
      <Map />
    </div>
  );
}
// vim key bindings

function AppInterface() {
  return (
    <div className="bg-gray-700 flex flex-col items-center w-4/12 gap-6">
      <Logo />
      <div className="">
        <Link to={"/cities"}>
          <Button>CITIES</Button>
        </Link>
        <Link to={"/country"}>
          <Button>COUNTRIES</Button>
        </Link>
      </div>
      <Routes>
        <Route path="/cities" element={<CitiesList />}></Route>
        <Route path="/countries" element={<CountriesList />}></Route>
      </Routes>
    </div>
  );
}

function Map() {
  return <div className="flex border-2 flex-1">hello</div>;
}

function Button({ children }) {
  return (
    <button className="bg-gray-800 hover:bg-gray-500 p-2 rounded-lg">
      {children}
    </button>
  );
}

function CitiesList() {
  return (
    <ul className="w-full flex flex-col items-center gap-4 ">
      {cityData.map((c) => (
        <li className="w-3/4 h-10 flex items-center justify-between pr-2 rounded-lg bg-gray-500">
          <span className="w-1 h-8 rounded-lg bg-green-600"></span>
          <span>{c.name}</span>
          <span className="">{`(${c.date})`}</span>
          <button className="border-2 bg-black text-white px-2 rounded-lg">
            x
          </button>
        </li>
      ))}
    </ul>
  );
}

function CountriesList() {
  return (
    <ul className="flex flex-wrap">
      {countryData.map((c) => (
        <div className="border-2 min-w-40 relative flex ">
          <span></span>
          <span>{c.name}</span>
        </div>
      ))}
    </ul>
  );
}
