import "./App.css";
import { Home } from "./components/Home";
import { Product } from "./components/Product";
import { Pricing } from "./components/Pricing";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { AppLayout } from "./AppLayout";

//white wrapper
// three pages PRODUCT PRICING LOG IN
//login box EMail and password init

function App() {
  return (
    <div className="bg-white p-6 h-screen flex flex-col relative top-0">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="product" element={<Product />}></Route>
        <Route path="pricing" element={<Pricing />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="app" element={<AppLayout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
