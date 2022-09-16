import Layout from "components/Layout";
import { MLFlowContextProvider } from "context/MLFlowContext";

function App() {
  return (
    <div className="App">
      <MLFlowContextProvider>
        <Layout />
      </MLFlowContextProvider>
    </div>
  );
}

export default App;
