import React, {useState} from 'react';

import './App.scss';

import {StateContext} from './contexts/StateContext.jsx';

import BaseCalc from "./components/BaseCalc.jsx";

import FundsCalc from './components/calculators/FundsCalc';
import SharesCalc from './components/calculators/SharesCalc';
import FundsResults from './components/calculators/FundsResults';

const App = () => {
  const [tradeMode, setTradeMode] = useState(false);

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

  const stateHandler = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    let entry = state.entry;
    console.log("BaseCalc, submitHandler: ", entry);
    setResults({
      ...results,
      shares: state.funds / entry,
      cost: state.shares * entry,
      gain: (state.goal - entry) * results.shares,
      loss: (entry - state.stop) * results.shares,
    });
  };

  const toggleMode = (event) => {
    event.preventDefault();
    setTradeMode(!tradeMode);
  };

  return (
    <div className="App">
      {" "}
      <navbar className="navbar">
        <div className="trade-type">
          shares
          <div className="outer-ring" onClick={toggleMode}>
            <div
              className={tradeMode ? "inner-circle" : "inner-circle toggled"}
            />
          </div>
          funds
        </div>
      </navbar>
      <div className="calculator-container">
        <StateContext.Provider value={{ state, stateHandler, submitHandler }}>
          <BaseCalc />
          {tradeMode ? <FundsCalc /> : <SharesCalc />}
          <FundsResults />
        </StateContext.Provider>
      </div>
    </div>
  );
};

export default App;
