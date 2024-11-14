import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import './assets/index.css'

const Main = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1500,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputValid = userInput.duration >= 1;

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
      {!inputValid && (
        <p style={{color: 'red'}} className="center">
          Please enter a duration greater than zero
        </p>
      )}
      {inputValid && <Results input={userInput} />}
    </div>
  );
};

export default Main;
