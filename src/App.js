import "./App.css";
import MainComponent from "./Components/MainComponent";
import useFetchUserData from "./hooks/useFetchUserData";

function App() {
  useFetchUserData();

  return (
    <div style={{ padding: "20px" }}>
      <MainComponent />
    </div>
  );
}

export default App;
