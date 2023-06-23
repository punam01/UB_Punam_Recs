import React, { useState } from 'react';
import UserContext from './UserContext';

const UserState = (props) => {
  const host = "http://localhost:5000";
  const userInitial = [];
  const [users, setUsers] = useState(userInitial);
  const AllUsers = async()=>{
        const response =await  fetch(`${host}/api/auth/allusers`, {
        method: "GET"
        });
        const json = await response.json();
        console.log(json.data);
        setUsers(json.data);
    };

  return (
    <UserContext.Provider
      value={{
        users,
        AllUsers
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
