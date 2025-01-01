import "./App.css";
import Form from "../src/components/Form";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="w-full mx-auto ">
        {/* <h1 className="text-3xl text-center font-bold mt-5 mb-7 bg-[#e0a83c]">
          CES Individual quote generator
        </h1> */}
        <Navbar />
        <div className="w-full max-w-[1000px] mx-auto">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
