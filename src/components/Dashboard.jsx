import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext'; // Correct relative import

function Dashboard() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>Dashboard</h2>
      {user ? (
        <p>Welcome back, {user.name}! Heres your dashboard content.</p>
      ) : (
        <p>Please login to access your dashboard.</p>
      )}
    </div>
  );
}

export default Dashboard;
