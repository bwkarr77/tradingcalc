import React, { useContext } from "react";

import { StateContext } from "../../contexts/StateContext.jsx";

const FundsCalc = () => {
  const { state, stateHandler, submitHandler } = useContext(StateContext);

  return (
    <div className="calc-container">
      <div className="">
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
      </div>
    </div>
  );
};

export default FundsCalc;
