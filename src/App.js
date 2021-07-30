import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default App;
