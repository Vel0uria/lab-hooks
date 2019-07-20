import React from "react";

export default function Counter(props) {
  return (
    <div className="count">
      <h2>Counter: {props.count}</h2>

      <button onClick={props.decrement}>
        <b>-</b>
      </button>
      <button onClick={props.increment}>
        <b>+</b>
      </button>
    </div>
  );
}
