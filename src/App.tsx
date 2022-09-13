import MLFlowContainer from "components/MLFlowContainer";
import { MLFlowContextProvider } from "context/MLFlowContext";

function App() {
  return (
    <div className="App">
      <MLFlowContextProvider>
        <MLFlowContainer />
      </MLFlowContextProvider>
    </div>
  );
}

export default App;
