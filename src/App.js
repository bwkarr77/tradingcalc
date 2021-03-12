import React, {useState} from 'react';

import './App.scss';

import {StateContext} from './contexts/StateContext.jsx';

import BaseCalc from "./components/BaseCalc.jsx";

import FundsCalc from './components/calculators/FundsCalc';
import SharesCalc from './components/calculators/SharesCalc';
import FundsResults from './components/calculators/FundsResults';
import SharesResults from './components/calculators/SharesResults';

import Analysis from './components/Analysis.jsx';

const App = () => {
  const [tradeShares, setTradeShares] = useState(false);

  const [state, setState] = useState({
    funds: 1000,
    shares: 30,
    entry: 10,
    stop: 9,
    goal: 12,
    edited: true
  });

  const [results, setResults] = useState({
    cost: 0,
    shares: 0,
    gain: 0,
    loss: 0,
    ratio: 0
  });

  const stateHandler = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
      edited: true
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    let entry = state.entry;

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
    setTradeShares(!tradeShares);
  };

  console.log(tradeShares)
  return (
    <div className="App">
      {" "}
      <navbar className="navbar">
        <div className="trade-type">
          shares
          <div className="outer-ring" onClick={toggleMode}>
            <div
              className={tradeShares ? "inner-circle" : "inner-circle toggled"}
            />
          </div>
          funds
        </div>
      </navbar>
      <div className="calculator-container">
        <StateContext.Provider value={{ state, results, stateHandler, submitHandler }}>
          {/* <BaseCalc /> */}
          {tradeShares ? <FundsCalc /> : <SharesCalc />}
          {tradeShares ? <FundsResults /> : <SharesResults />}
        </StateContext.Provider>
      </div>
      <Analysis />
    </div>
  );
};

export default App;
