import React, { useState, useContext, useMemo } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Homepage from "./pages/homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Cart } from "./utils/Store";
import SPP from "./pages/SinglePageProduct/SPP";
import Checkout from "./pages/checkout/Checkout";

function App() {
  const [cart, setCart] = useState<any>([]);

  // const something = useMemo(() => ({ value, setValue }), [value, setValue]);

  return (
    <Cart.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/buy/productId/:productId" element={<SPP />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </Cart.Provider>
  );
}

export default App;
