import React from "react";

const Pet = props => {
  return (
    <div>
      <h1>name: {props.name}</h1>
      <h2>animal: {props.animal}</h2>
      <h2>breed: {props.breed}</h2>
    </div>
  );
};

export default Pet;