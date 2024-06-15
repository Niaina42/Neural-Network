import Architecture from "./RNA/Architecture";
const { default: Router } = require("./router/Router");

function App() {
  const architecture = new Architecture();
  const network = architecture.networkArchitecture();
  return (
    <Router architecture={architecture} network={network} />
  );
}

export default App;