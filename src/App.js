import React from 'react';
import { UserProvider } from './contexts/UserContext'; 
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import "./App.css"

function App() {
  return (
    <UserProvider>
      <Header />
      <Dashboard />
    </UserProvider>
  );
}

export default App;
