import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { id: Math.random().toString(), name: uName, age: uAge },
      ];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
