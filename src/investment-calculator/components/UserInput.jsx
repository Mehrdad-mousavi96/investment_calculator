import React, { useState } from "react";

const UserInput = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChagnes = (inputIdentifires, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...userInput,
        [inputIdentifires]: newValue,
      };
    });
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(e) => handleChagnes("initialInvestment", e.target.value)}
          />
        </p>

        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(e) => handleChagnes("annualInvestment", e.target.value)}
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(e) => handleChagnes("expectedReturn", e.target.value)}
          />
        </p>

        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(e) => handleChagnes("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
