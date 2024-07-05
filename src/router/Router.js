import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Selector from "../components/Selector/Selector";
import Function from "../components/Function/Function";
import Architecture from "../components/Architecture/Architecture";
import Training from "../components/Training/Training";
import Prediction from "../components/Prediction/Prediction";
import MultiPrediction from "../components/MultiPrediction/MultiPrediction";
import Conclusion from "../components/Conclusion/Conclusion";

const Routing = ({ archLoading, architecture, network, apprentissage, prediction }) => {
  return (
    <Router>
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
        <Route
          path="/multi-prediction"
          element={
            <MultiPrediction
              architecture={architecture}
              apprentissage={apprentissage}
              prediction={prediction}
            />
          }
        />
        <Route
          path="/conclusion"
          element={
            <Conclusion />
          }
        />
      </Routes>
    </Router>
  );
};
export default Routing;
