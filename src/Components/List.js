import React from 'react';
import './List.css';

export default function List({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.todo}</li>
      ))}
    </ul>
  );
}
