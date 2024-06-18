import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Selector from "../components/Selector/Selector";
import Function from "../components/Function/Function";
import Architecture from "../components/Architecture/Architecture";
import Training from "../components/Training/Training";
import Prediction from "../components/Prediction/Prediction";

const Router = ({ archLoading, architecture, network, apprentissage, prediction }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Selector archLoading={archLoading} />} />
        <Route
          path="/function"
          element={<Function architecture={architecture} />}
        />
        <Route
          path="/architecture"
          element={
            <Architecture architecture={architecture} network={network} />
          }
        />
        <Route
          path="/training"
          element={
            <Training
              architecture={architecture}
              apprentissage={apprentissage}
            />
          }
        />
        <Route
          path="/prediction"
          element={
            <Prediction
              architecture={architecture}
              apprentissage={apprentissage}
              prediction={prediction}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
