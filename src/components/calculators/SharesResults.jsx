import React, { useContext } from "react";

import { StateContext } from "../../contexts/StateContext.jsx";

const SharesResults = () => {
  const { state, results } = useContext(StateContext);

  const { goal, entry, stop } = state;
  const { shares, cost, gain, loss } = results;

  return (
    <div className="results">
      {/* <label>shares: {shares}</label> */}
      <label>cost: {cost}</label>
      <label>risk ratio: {(goal - entry) / (entry - stop)} : 1</label>
      <label>gain: {gain}</label>
      <label>loss: {loss}</label>
    </div>
  );
};

export default SharesResults;
