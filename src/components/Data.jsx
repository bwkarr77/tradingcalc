import React from "react";

const Data = (props) => {
  const { price, shares, id } = props.data;
  const name = props.name;
  console.log("props: ", price);
  return (
    <div>
      <input
        key={`${name}Price_${id}`}
        id={id}
        name={name}
        type="number"
        min="0"
        placeholder={price}
        value={price}
        //   onChange={(e) = {handleChange(e, entry)}}
        onChange={props.handleChange}
      />
      <input
        key={`${name}Shares_${id}`}
        name={name}
        type="number"
        min="0"
        placeholder={shares}
        value={shares}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default Data;
