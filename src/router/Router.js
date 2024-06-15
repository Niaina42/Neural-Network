import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Selector from "../components/Selector/Selector";
import Function from "../components/Function/Function";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Selector />} />
        <Route path="/function" element={<Function />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
