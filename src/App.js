import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Form from "./components/Form";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const inputChange = change => {
    if (change.target.name === "name") setName(change.target.value);
    if (change.target.name === "surname") setSurname(change.target.value);
    if (change.target.name === "age") setAge(change.target.value);
  };
  return (
    <div className="App">
      <Counter increment={increment} count={count} decrement={decrement} />
      <Form inputChange={inputChange} name={name} surname={surname} age={age} />
    </div>
  );
}

export default App;
