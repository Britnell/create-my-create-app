import React from "react";

const App = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>App</h1>
      <div>
        <h2>Counter</h2>
        <div>Count = {count}</div>
        <div>
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default App;
