import React, { useState } from "react";

const UserInput = () => {

    const [] = useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    })

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" required />
        </p>

        <p>
          <label>Annual Investment</label>
          <input type="number" required/>
        </p>
      </div>
      
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" required/>
        </p>

        <p>
          <label>Duration</label>
          <input type="number" required/>
        </p>
      </div>
    </section>
  );
};

export default UserInput;
