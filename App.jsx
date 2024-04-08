import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
    console.log("increase가 클릭됨");
  };

  const decreaseCount = () => {
    setCount(count - 1);
    console.log("decrease가 클릭됨");
  };

  return (
    <div>
      <h2 id="number">{count}</h2>
      <button id="increase" onClick={(e) => { increaseCount(); console.log("increase가 클릭됨"); }}>+1</button>
      <button id="decrease" onClick={(e) => { decreaseCount(); console.log("decrease가 클릭됨"); }}>-1</button>
    </div>
  );
}

export default App;
