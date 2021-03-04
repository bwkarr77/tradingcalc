import React from "react";

const Data = (props) => {
  const { price, shares } = props.data;
  const id = props.data.id;
  const name = props.name;
  // console.log("props: ", props.data);

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
        onChange={(e) => props.handleChange(e, "price", props.type)}
      />
      <input
        key={`${name}Shares_${id}`}
        id={id}
        name={name}
        type="number"
        min="0"
        placeholder={shares}
        value={shares}
        onChange={(e) => props.handleChange(e, "shares", props.type)}
      />
    </div>
  );
};

export default Data;
