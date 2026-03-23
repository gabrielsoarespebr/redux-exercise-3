import { useState } from "react";

export const ToDo = () => {
  const [toDoText, setToDoText] = useState("");

  const handleChange = (e) => {
    setToDoText(e.target.value);
  };

  return (
    <div>
      <div>
        <input type="text" value={toDoText} onChange={handleChange} />
        <button>Add</button>
      </div>
      <ul>
        <li>{toDoText}</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
};
