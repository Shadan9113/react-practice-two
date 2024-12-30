import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext'; // Correct relative import

function Header() {
  const { user, logout, login } = useContext(UserContext);

  return (
    <header>
      <h1>Welcome to Dashboard</h1>
      {user ? (
        <>
          <p>Hello, {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login({ name: 'Shaddy' })}>Login</button>
      )}
    </header>
  );
}

export default Header;
