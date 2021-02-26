import React, { useState } from "react";

import "./basecalc.scss";

const BaseCalc = () => {
  const [state, setState] = useState({
    funds: 1000,
    shares: 30,
    entry: 10,
    stop: 9,
    goal: 12,
  });

  const [results, setResults] = useState({
    cost: 1000,
    shares: 30,
    gain: 0,
    loss: 0,
  });

  const [mode, setMode] = useState(false);

  const stateHandler = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let entry = state.entry;
    setResults({
      ...results,
      shares: state.funds / entry,
      gain: state.goal / entry,
      loss: state.stop / entry,
      cost: state.shares * entry,
    });
  };

  const toggleMode = (event) => {
    event.preventDefault();
    setMode(!mode);
  };

  return (
    <div>
      <navbar className="navbar">
        <div className="outer-ring" onClick={toggleMode}>
          <div className={mode ? "inner-circle" : "inner-circle toggled"} />
        </div>
      </navbar>
      <div className="basic-calculator">
        <form onSubmit={submitHandler}>
          <label>
            funds:
            <input
              name="funds"
              value={state.funds}
              type="number"
              onChange={stateHandler}
              //onclick = toggle display
            />
          </label>
          <label>
            shares:
            <input
              name="shares"
              value={state.shares}
              type="number"
              onChange={stateHandler}
              //onclick = toggle display
            />
          </label>
          <label>
            entry
            <input
              name="entry"
              value={state.entry}
              type="number"
              onChange={stateHandler}
            />
          </label>
          <label>
            stop
            <input
              name="stop"
              value={state.stop}
              type="number"
              onChange={stateHandler}
            />
          </label>
          <label>
            goal
            <input
              name="goal"
              value={state.goal}
              type="number"
              onChange={stateHandler}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <div className="results">
          <label>shares: {results.shares}</label>
          <label>gain: {results.gain}</label>
          <label>loss: {results.loss}</label>
          <label>cost: {results.cost}</label>
        </div>
      </div>
    </div>
  );
};

export default BaseCalc;