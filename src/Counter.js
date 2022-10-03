import React from "react";

export default function Counter({ init }) {
  const [count, setCount] = React.useState(init);
  return (
    <div>
      <h2>Counter</h2>
      <div>Count = {count}</div>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}
