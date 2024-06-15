import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Selector from "../components/Selector/Selector";
import Function from "../components/Function/Function";
import Architecture from "../components/Architecture/Architecture";

const Router = ({ architecture, network }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Selector />} />
        <Route
          path="/function"
          element={<Function architecture={architecture} />}
        />
        <Route
          path="/architecture"
          element={<Architecture architecture={architecture} network={network} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
