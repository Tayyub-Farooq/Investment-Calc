import "./index.css";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [inputData, setInputData] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleInputChange(key, value) {
    setInputData((prevInput) => {
      const updatedData = { ...prevInput, [key]: +value };

      return updatedData;
    });
  }

  return (
    <>
      <Header></Header>
      <main>
        <div id="body">
          <UserInput handleChange={handleInputChange}></UserInput>

          <Result data={inputData}></Result>
        </div>
      </main>
    </>
  );
}

export default App;
