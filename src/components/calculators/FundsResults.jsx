import React, { useContext } from "react";

import { StateContext } from "../../contexts/StateContext.jsx";

const FundsResults = () => {
  const { state } = useContext(StateContext);

  const results = {
    shares: 0,
    gain: 0,
    loss: 0,
    cost: 0,
  };

  return (
    <div className="results">
      <label>shares: {results.shares}</label>
      <label>gain: {results.gain}</label>
      <label>loss: {results.loss}</label>
      <label>cost: {results.cost}</label>
    </div>
  );
};

export default FundsResults;
