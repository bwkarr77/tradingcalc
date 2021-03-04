import React, { useState } from "react";

import "./analysis.scss";

import Data from "./Data.jsx";

const Analysis = () => {
  const [analysisData, setAnalysisData] = useState({
    entryData: {
      entries: [
        { price: 11111, shares: 999, id: 1 },
        { price: 99999, shares: 2222, id: 2 },
      ],
      last_id: 2,
    },
    exitData: {
      exits: [{ price: 10, shares: 5, id: 1 }],
      last_id: 1,
    },
  });

  const handleChange = (e, category, sub) => {
    const id = parseInt(e.target.id);
    const name = `${e.target.name}Data`;
    // console.log("analysis handle: ", e.target, name, category, sub);

    setAnalysisData({
      // spread operator (...) copies the state again.
      ...analysisData,
      // account for entryData or exitData
      [name]: {
        ...analysisData[name],
        [sub]: [
          //...analysisData.entry.entries.map(
          ...analysisData[name][sub].map((each) => {
            // const test_id = parseInt(eac);
            if (id === each.id) {
              return {
                ...each,
                [category]: e.target.value,
              };
            }
            return each;
          }),
        ],
      },
    });
  };

  const newData = (event) => {
    event.preventDefault();
    const name = `${event.target.name}Data`;
    const newId = analysisData[name].last_id + 1;
    const type = Object.keys(analysisData[name])[0];

    const newData = {
      price: 0,
      shares: 0,
      id: newId,
    };
    setAnalysisData({
      ...analysisData,
      [name]: {
        ...analysisData[name],
        [type]: [...analysisData[name][type], newData],
        last_id: newId,
      },
    });
  };

  return (
    <div className="analysis">
      <section className="entries-section">
        <div className="entries">
          <h3>Entries</h3>
          {analysisData.entryData.entries.map((entry) => {
            return (
              <div>
                {/* <input
                  key={`entryPrice_${entry.id}`}
                  id={entry.id}
                  name="entry"
                  type="number"
                  min="0"
                  placeholder={entry.price}
                  value={entry.price}
                  //   onChange={(e) = {handleChange(e, entry)}}
                  onChange={(e) => handleChange(e, "price", "entries")}
                />
                <input
                  key={`entryShares_${entry.id}`}
                  id={entry.id}
                  name="entry"
                  type="number"
                  min="0"
                  placeholder={entry.shares}
                  value={entry.shares}
                  onChange={(e) => handleChange(e, "shares", "entries")}
                /> */}
                <Data
                  data={entry}
                  name="entry"
                  handleChange={handleChange}
                  type="entries"
                />
              </div>
            );
          })}
          <button name="entry" onClick={newData}>
            +
          </button>
        </div>
      </section>
      <section className="exit-section">
        <div className="exits">
          <h3>Exits</h3>
          {analysisData.exitData.exits.map((exit) => {
            return (
              <div>
                {/* <input
                  key={`exitPrice_${exit.id}`}
                  id={exit.id}
                  name="exit"
                  type="number"
                  min="0"
                  placeholder={exit.price}
                  value={exit.price}
                  //   onChange={(e) = {handleChange(e, exit)}}
                  onChange={(e) => handleChange(e, "price", "exits")}
                />
                <input
                  key={`exitShares_${exit.id}`}
                  id={exit.id}
                  name="exit"
                  type="number"
                  min="0"
                  placeholder={exit.shares}
                  value={exit.shares}
                  onChange={(e) => handleChange(e, "shares", "exits")}
                /> */}
                <Data
                  data={exit}
                  name="exit"
                  handleChange={handleChange}
                  type="exits"
                />
              </div>
            );
          })}
          <button name="exit" onClick={newData}>
            +
          </button>
        </div>
      </section>
    </div>
  );
};

export default Analysis;
