import { Home } from "./components/Home";
import "./App.css";
import { Product } from "./components/Product";
import { Pricing } from "./components/Pricing";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";
import { useReducer } from "react";
import { WorldWise } from "./WorldWise";

//white wrapper
// three pages PRODUCT PRICING LOG IN
//login box EMail and password init

const initialState = {
  isOpen: false,
};

function reducer() {}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="bg-white p-6 h-dvh flex flex-col relative">
      {state.isOpen ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/pricing" element={<Pricing />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </>
      ) : (
        <WorldWise />
      )}
    </div>
  );
}

export default App;
