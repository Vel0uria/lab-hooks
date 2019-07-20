import React from "react";

function Form(props) {
  return (
    <div className="form">
      <h2>Form</h2>
      <input type="text" name="name" onChange={props.inputChange} />
      <p>{props.name}</p>
      <input type="text" onChange={props.inputChange} name="surname" />
      <p>{props.surname}</p>
      <input type="text" name="age" onChange={props.inputChange} />
      <p>{props.age}</p>
    </div>
  );
}

export default Form;
