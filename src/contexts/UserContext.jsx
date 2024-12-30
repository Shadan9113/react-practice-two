import React, { createContext, useState } from 'react';

// Create a Context
const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null); // default user is null (unauthenticated)

  const login = (userData) => {
    setUser(userData); // Setting user data
  };

  const logout = () => {
    setUser(null); // Clear user data on logout
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
