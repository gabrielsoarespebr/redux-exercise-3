import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addActivity } from "../features/toDoSlice";

export const ToDo = () => {
  const toDoList = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [toDoText, setToDoText] = useState("");

  const handleChange = (e) => {
    setToDoText(e.target.value);
  };

  return (
    <div>
      <div>
        <input type="text" value={toDoText} onChange={handleChange} />
        <button onClick={() => dispatch(addActivity(toDoText))}>Add</button>
      </div>
      <p>{toDoText}</p>
      <ul>
        {toDoList.map((activity, id) => (
          <li key={id}>{activity}</li>
        ))}
      </ul>
    </div>
  );
};
