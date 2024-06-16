import { useEffect, useState } from "react";
import Apprentissage from "./RNA/Apprentissage";
import Architecture from "./RNA/Architecture";
const { default: Router } = require("./router/Router");

function App() {
  const [archLoading, setArchloading] = useState(true);
  const [architecture, setArchitecture] = useState(null);
  const [network, setNetwork] = useState(null);
  const [apprentissage, setApprentissage] = useState(null);

  useEffect(() => {
    const architectured = new Architecture();
    const network = architectured.networkArchitecture();
    const training = new Apprentissage(0.1, architectured);
    setArchitecture(architectured)
    setNetwork(network)
    setApprentissage(training)
    setArchloading(false)
  }, [])

  return (
    <Router
      architecture={architecture}
      network={network}
      apprentissage={apprentissage}
      archLoading={archLoading}
    />
  );
}

export default App;
