import {createContext} from 'react';

//this context holds all the states related to the article so that all components can access the state

const userContext=createContext({
    users: [],
  getAllUser: () => {},
});

export default userContext;