import "./App.css";
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Pricing } from "./pages/Pricing";
import { AppLayout } from "./pages/AppLayout";
import { Login } from "./components/Login";
import { CitiesBox } from "./components/CitiesBox";
import { CountriesBox } from "./components/CountriesBox";
import { Form } from "./components/Form";
import { PageNotFound } from "./pages/PageNotFound";
import { CityDetails } from "./components/CityDetails";
import { CitiesContext } from "./components/CitiesContext";

//white wrapper
// three pages PRODUCT PRICING LOG IN
//login box EMail and password init

const cityData = [
  {
    name: "Lisbon",
    flag: "",
    country: "Portugal",
    date: "August,2,2021",
    lat: 19,
    long: 56,
    id: 12345,
  },
  {
    name: "Madrid",
    flag: "",
    country: "Spain",
    date: "July,4,2021",
    lat: 56,
    long: 23,
    id: 12346,
  },
  {
    name: "Lahore",
    flag: "",
    country: "Pakistan",
    date: "Dec,4,2021",
    lat: 10,
    long: 80,
    id: 12347,
  },
  {
    name: "Barcelona",
    flag: "",
    country: "Spain",
    date: "Feb,4,2021",
    lat: 41,
    long: 64,
    id: 12348,
  },
  {
    name: "Karachi",
    flag: "",
    country: "Pakistan",
    date: "Mar,4,2021",
    lat: 35,
    long: 69,
    id: 12349,
  },
];

function App() {
  // CitiesContext();
  // useContext(CitiesContext);
  const [cities, setCities] = useState(cityData);
  return (
    <div className="bg-white p-6 h-screen flex flex-col relative top-0">
      <CitiesContext.Provider value={[cities, setCities]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to={"cities"} />} />
            <Route path="cities" element={<CitiesBox />} />
            <Route path="cities/:id" element={<CityDetails />} />
            <Route path="countries" element={<CountriesBox />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </CitiesContext.Provider>
    </div>
  );
}

export default App;
