import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import React, { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [errorMessage, setErrorMessage] = useState();

  const [validity, setValidity] = useState(false);

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setErrorMessage({
        title: "Invalid input",
        message: "Username and age must be entered!",
      });
      setValidity(true);
      return;
    }
    if (+enteredUserAge < 1) {
      setErrorMessage({
        title: "Invalid age",
        message: "Age is invalid, please enter valid age!",
      });
      setValidity(true);
      return;
    }

    props.onAddUser(enteredName, enteredUserAge);
    
    nameInputRef.current.value = '';
   ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setValidity(false);
  };

  return (
    <Wrapper>
      {validity && (
        <ErrorModal
          onConfirm={errorHandler}
          title={errorMessage.title}
          message={errorMessage.message}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age(years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
