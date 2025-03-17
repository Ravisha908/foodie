import { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h3>{number}</h3>
      <button onClick={() => setNumber(number + 1)}>Increase Number</button>
    </div>
  );
}

export default Counter;
