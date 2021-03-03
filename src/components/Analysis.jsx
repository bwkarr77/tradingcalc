import React, { useState } from "react";

import "./analysis.scss";

import Data from "./Data.jsx";

const Analysis = () => {
  const [entryData, setEntryData] = useState({
    entries: [
      { price: 100, shares: 20, entry_id: 1 },
      { price: 120, shares: 40, entry_id: 2 },
    ],
    last_entry_id: 2,
  });
  const [exits, setExits] = useState([{ price: 0, shares: 0, exit_id: 1 }]);

  const [analysisData, setAnalysisData] = useState({
    entryData: {
      entries: [
        { price: 11111, shares: 999, entry_id: 1 },
        { price: 99999, shares: 2222, entry_id: 2 },
      ],
      last_entry_id: 2,
    },
    exitData: {
      exits: [{ price: 0, shares: 0, exit_id: 1 }],
      last_exit_id: 1,
    },
  });

  const handleChange = (e) => {
    console.log("analysis handle: ", e.target);
    const id = parseInt(e.target.id);
    // console.log("search: ", e.target.name[e.target.name.indexOf("_") + 1]);
    const name = `${e.target.name.slice(0, 5)}Data`;
    const type = e.target.name[e.target.name.indexOf("_") + 1];
    console.log("types: ", name, type);
    // switch()
    setAnalysisData({
      ...analysisData,
      [name]: {
        //accounts for entryData or exitData
        ...analysisData[name],
        entries: [
          //HOW TO MAKE THIS ONE UNIVERSAL....???
          ...analysisData[name].entries.map((entry) => {
            if (id === entry.entry_id) {
              console.log("match!!", entry);
              return {
                ...entry,
                price: e.target.value,
              };
            }
            return entry;
          }),
        ],
      },
    });
  };

  const newEntry = (event) => {
    event.preventDefault();
    const newEntry = {
      price: 0,
      shares: 0,
      entry_id: analysisData.entryData.last_entry_id + 1,
    };
    setAnalysisData({
      ...analysisData,
      entryData: {
        ...analysisData.entryData,
        entries: [...analysisData.entryData.entries, newEntry],
      },
    });
  };

  // console.log("entries:", entryData.entries);

  return (
    <div className="analysis">
      <section className="entries-section">
        <div className="entries">
          <h3>Entries</h3>
          {/* {entryData.entries.map((entry) => { */}
          {analysisData.entryData.entries.map((entry) => {
            // console.log("entry: ", entry);
            return (
              <div>
                <input
                  key={`entryPrice_${entry.id}`}
                  id={entry.entry_id}
                  name="entry_price"
                  type="number"
                  min="0"
                  placeholder={entry.price}
                  value={entry.price}
                  //   onChange={(e) = {handleChange(e, entry)}}
                  onChange={handleChange}
                />
                <input
                  key={`entryShares_${entry.id}`}
                  name="entry_share"
                  type="number"
                  min="0"
                  placeholder={entry.shares}
                  value={entry.shares}
                  onChange={handleChange}
                />
                {/* <Data data={entry} name="entry" handleChange={handleChange} /> */}
              </div>
            );
          })}
          <button onClick={newEntry}>+</button>
        </div>
      </section>
      <section className="exit-section">
        <div className="exits">
          <h3>Exits</h3>
        </div>
      </section>
    </div>
  );
};

export default Analysis;
