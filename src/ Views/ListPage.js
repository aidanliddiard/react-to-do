import React from 'react';
import { useEffect, useState } from 'react';
import { completeTodo, fetchToDos } from '../services/todo';
import List from '../Components/List';
import { deleteTodo } from '../services/todo';

export default function ListPage() {
  const [todos, setTodos] = useState([]);
  const [completeError, setCompleteError] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchToDos();
      setTodos(data);
    };
    fetchData();
  }, []);

  const completedHandler = async (id, completed) => {
    try {
      await completeTodo(id, completed);
      const refresh = await fetchToDos();
      setTodos(refresh);
    } catch (e) {
      setCompleteError(e.message);
    }
  };

  const deleteHandler = async (id) => {
    try {
      await deleteTodo(id);
      const refresh = await fetchToDos();
      setTodos(refresh);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div>
      <h1>To Do List</h1>
      {completeError && <p>{completeError}</p>}
      <List
        todos={todos}
        deleteHandler={deleteHandler}
        error={error}
        completedHandler={completedHandler}
      />
    </div>
  );
}
