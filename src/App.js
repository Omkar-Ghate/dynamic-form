import "./styles.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function App() {
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), firstName: "" }
  ]);

  var [count, setCount] = useState(1);

  const handleAddFields = (e) => {
    e.preventDefault();
    setCount(count + 1);

    if (count < 7) {
      setInputFields([...inputFields, { id: uuidv4(), firstName: "" }]);
    }
  };
  return (
    <div>
      <form>
        <button className="addBtn" onClick={() => handleAddFields(event)}>
          Add
        </button>
        {inputFields.map((inputField) => (
          <div key={inputField.id}>
            <label>Name</label>
            <input id="name" type="text" placeholder="Enter your name" />
          </div>
        ))}
      </form>
    </div>
  );
}
