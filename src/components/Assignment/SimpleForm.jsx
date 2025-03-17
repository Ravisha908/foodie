import { useState } from "react";

function SimpleForm() {
  const [value, setValue] = useState("");
  const [data, setData] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setValue(e.target.value);
    setData(value);
    setValue("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input type="Submit" />
      <h2>{data ? data : ""}</h2>
    </form>
  );
}

export default SimpleForm;
