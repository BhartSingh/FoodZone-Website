import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Checkoutpage from "./pages/Checkoutpage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/checkout" element={<Checkoutpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
