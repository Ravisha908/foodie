import { useState } from "react";
function ToggleText() {
  const [istoggle, setIsToggle] = useState(true);
  return (
    <div>
      <h2>{istoggle ? "Hello" : "Goodbye"}</h2>
      <button onClick={() => setIsToggle((is) => !is)}>
        {istoggle ? "Say Goodbye" : "Say Hello"}
      </button>
    </div>
  );
}

export default ToggleText;
