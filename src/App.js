import React from "react";
import "./style.scss";

const Counter = React.lazy(() => import("./Counter"));

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Counter init={7} />
      </React.Suspense>
    </div>
  );
};

export default App;
