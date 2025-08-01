import React from 'react';

let arr2 = ["😊", "❤️", "🔥", "🙌", "🎉", "⭐"];

let todos = ["day1", "day2", "day3", "day4", "day5", "day6"];

let emojs = Math.floor(Math.random() * 6);

const Sam = () => {
  return (
    <div>
      <h3>arr2[emojs]</h3>
      {todos.map((item, index) => (
        <li key={index}>
          my task is {item} &amp; position is {index}
        </li>
      ))}
    </div>
  );
};

export default Sam;