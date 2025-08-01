import React from 'react';

let arr2 = ["😊", "❤️", "🔥", "🙌", "🎉", "⭐"];
let todos = ["day1", "day2", "day3", "day4", "day5", "day6"];
let emojs = Math.floor(Math.random() * 6);

const Sam = () => {
  return (
    <div>
      <h3>{arr2[emojs]}</h3>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {index % 2 === 0
              ? `⭐ Important task: ${item} at position ${index}`
              : `Regular task: ${item} at position ${index}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sam;
