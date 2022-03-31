import React from 'react';
import { useEffect, useState } from 'react';
import { fetchToDos } from '../services/todo';
import List from '../Components/List';

export default function ListPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchToDos();
      setTodos(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>To Do List</h1>
      <List todos={todos} />
    </div>
  );
}
