import React from 'react';

const Person = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>Age: {props.age}</h3>
      <p style={{ color: props.favColor }}>Favorite Color</p>
    </div>
  );
};

export default Person;