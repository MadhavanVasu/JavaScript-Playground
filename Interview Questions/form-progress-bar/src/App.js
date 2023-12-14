import MyForm from "./components/MyForm";
import ProgressBar from "./components/ProgressBar";
import { ProgressContextProvider } from "./context/ProgressContext";

function App() {
  return (
    <ProgressContextProvider>
      <div className="App">
        <ProgressBar></ProgressBar>
        <MyForm></MyForm>
      </div>
    </ProgressContextProvider>
  );
}

export default App;
