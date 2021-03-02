import React, { useState } from "react";

import "./analysis.scss";

const Analysis = () => {
  const [entries, setEntries] = useState([
    { price: 100, shares: 20, entry_id: 1 },
    { price: 120, shares: 40, entry_id: 2 },
  ]);
  const [exits, setExits] = useState([{ price: 0, shares: 0, exit_id: 1 }]);

  const handleChange = (e) => {
    console.log("analysis hande: ", e.target);
    setEntries({
      ...entries,
      entries: entries.map((entry) => {
        if (entry.entry_id === e.target.id) {
          //   console.log("herpaderp: ", entry.id);
          entry.price = e.target.value;
          // }
        }
      }),
    });
  };

  const newEntry = () => {};

  console.log("entries:", entries);

  return (
    <div className="analysis">
      <section className="entries-section">
        <div className="entries">
          <h3>Entries</h3>
          {entries.map((entry) => {
            console.log("entry: ", entry);
            return (
              <div>
                <input
                  key={`entryPrice_${entry.id}`}
                  id={entry.entry_id}
                  name="entry"
                  type="number"
                  min="0"
                  placeholder={entry.price}
                  value={entry.price}
                  //   onChange={(e) = {handleChange(e, entry)}}
                  onChange={handleChange}
                />
                <input
                  key={`entryShares_${entry.id}`}
                  name="entry"
                  type="number"
                  min="0"
                  placeholder={entry.shares}
                  value={entry.shares}
                  onChange={handleChange}
                />
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
