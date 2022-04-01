import React from 'react';
import { useEffect, useState } from 'react';
import { fetchToDos } from '../services/todo';
import List from '../Components/List';
import { deleteTodo } from '../services/todo';

export default function ListPage() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchToDos();
      setTodos(data);
    };
    fetchData();
  }, []);

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
      <List todos={todos} deleteHandler={deleteHandler} error={error} />
    </div>
  );
}
