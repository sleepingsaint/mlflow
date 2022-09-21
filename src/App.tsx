import Layout from "components/Layout";
import { ReactFlowProvider } from "react-flow-renderer";

function App() {
  return (
    <div className="App">
        <ReactFlowProvider>
          <Layout />
        </ReactFlowProvider>
    </div>
  );
}

export default App;
