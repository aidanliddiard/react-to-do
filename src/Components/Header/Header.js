import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
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
    </div>
  );
}
