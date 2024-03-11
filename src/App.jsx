import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Pricing } from "./pages/Pricing";
import { AppLayout } from "./pages/AppLayout";
import { Login } from "./components/Login";
import { CitiesBox } from "./components/CitiesBox";
import { CountriesBox } from "./components/CountriesBox";
import { Button } from "./components/Button";

//white wrapper
// three pages PRODUCT PRICING LOG IN
//login box EMail and password init

function App() {
  return (
    <div className="bg-white p-6 h-screen flex flex-col relative top-0">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route path="cities" element={<CitiesBox />} />
          <Route path="countries" element={<CountriesBox />} />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;

function PageNotFound() {
  return <p className="mx-auto">Page Not Found😂</p>;
}

function Form() {
  return (
    <form action="" className="grid grid-cols-1 border-2 w-3/4 ">
      <label htmlFor="" className="col-span-2">
        City Name
        <input type="text" name="" id="" className="" />
      </label>
      <label htmlFor="" className="col-span-2">
        When did you go to X?
        <input type="text" name="" id="" />
      </label>
      <label htmlFor="" className="col-span-2 ">
        Notes about your trip to X?
        <input type="text" name="" id="" />
      </label>
      <Button>ADD</Button>
      <Button>&larr; BACK</Button>
    </form>
  );
}
