import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { logOutUser } from '../../services/users';

export default function Header({ setCurrentUser, currentUser }) {
  const handleLogOut = async () => {
    await logOutUser();
    setCurrentUser(null);
  };
  return (
    <div className="header">
      <ul>
        <li>
          <NavLink exact to="/list">
            My list
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/add-new">
            Add
          </NavLink>
        </li>
      </ul>
      <ul>
        {!currentUser && (
          <li>
            <NavLink exact to="/">
              Sign In
            </NavLink>
          </li>
        )}
        {currentUser && (
          <>
            <li>{currentUser}</li>
            <li>
              <button onClick={handleLogOut}>Sign out</button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
