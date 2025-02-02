import "./App.css";
import Form from "../src/components/Form";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="w-full mx-auto ">
        <Navbar />
        <div className="w-full max-w-[1000px] mx-auto">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
