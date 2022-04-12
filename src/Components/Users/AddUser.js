import React, { useState } from "react";

import Card from "../UI/Card";

import Button from "../UI/Button";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const addUserHandler = (events) => {
    events.preventDefault();

    //validation of input in correct
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0)
      return;
    if (Number(enteredAge) < 1) return;

    console.log(enteredUserName, enteredAge);
    props.onAddUser(enteredUserName, enteredAge);
    //resetting after submit
    setEnteredUserName("");
    setEnteredAge("");
  };
  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName:</label>
        <input
          id="username"
          type="text"
          value={enteredUserName}
          onChange={usernameChangeHandler}
        ></input>
        <label htmlFor="age">Age:</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
