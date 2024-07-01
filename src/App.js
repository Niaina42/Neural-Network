import React, { useEffect, useState } from "react";
import Apprentissage from "./RNA/Apprentissage";
import Architecture from "./RNA/Architecture";
import Prediction from "./RNA/Prediction";
import { createTheme, useTheme, ThemeProvider } from "@mui/material/styles";
const { default: Router } = require("./router/Router");

function App() {
  const newTheme = createTheme({
    palette: {
      mode: "dark",
      secondary: {
        main: "#9c27b0", 
      }
    },
  });
  const [archLoading, setArchloading] = useState(true);
  const [architecture, setArchitecture] = useState(null);
  const [network, setNetwork] = useState(null);
  const [apprentissage, setApprentissage] = useState(null);
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    const architecturing = new Architecture();
    const networking = architecturing.networkArchitecture();
    const training = new Apprentissage(0.1, architecturing);
    const predicting = new Prediction(training);

    setArchitecture(architecturing);
    setNetwork(networking);
    setApprentissage(training);
    setArchloading(false);
    setPrediction(predicting);
  }, []);

  return (
    <ThemeProvider theme={newTheme}>
      <Router
        architecture={architecture}
        network={network}
        apprentissage={apprentissage}
        archLoading={archLoading}
        prediction={prediction}
      />
    </ThemeProvider>
  );
}

export default App;
