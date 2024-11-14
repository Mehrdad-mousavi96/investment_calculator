import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";


const App = () => {

  const [userInput, setUserInput] = useState({
    initialInvestment: 1500,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChagnes = (inputIdentifires, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...userInput,
        [inputIdentifires]: +newValue,
      };
    });
  };


  return (
    <div>
      <Header />
      <UserInput onChange={handleChagnes} userInput={userInput} />  
      <Results input={userInput} />
    </div>
  );
};

export default App;
