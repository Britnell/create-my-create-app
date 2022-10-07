// import Counter from "./Counter";
import React from "react";
const Counter = React.lazy(() => import("./Counter"));

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <p>With esbuild</p>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Counter init={0} />
      </React.Suspense>
    </div>
  );
};

export default App;
