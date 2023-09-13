import React, { createContext } from 'react';

// Create the UserContext
const UserContext = createContext();

// Create the UserProvider component
const UserProvider = ({ value, children }) => {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
