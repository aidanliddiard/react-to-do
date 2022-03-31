import React from 'react';
import { useEffect } from 'react';
import { fetchToDos } from '../services/todo';

export default function List() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchToDos();
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>To Do List</h1>
    </div>
  );
}
