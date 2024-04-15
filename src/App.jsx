import "./App.css";
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
import { CitiesProvider } from "./components/CitiesContext";

//white wrapper
// three pages PRODUCT PRICING LOG IN
//login box EMail and password init

function App() {
  return (
    <div className="bg-white p-6 h-screen flex flex-col relative top-0">
      <CitiesProvider>
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
      </CitiesProvider>
    </div>
  );
}

export default App;
