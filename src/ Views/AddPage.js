import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AddForm from '../Components/AddForm';
import { addToDo } from '../services/todo';

export default function Add() {
  const [todo, setTodo] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addToDo(todo);
      history.push('/list');
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <div>
      <h3>Add To Do:</h3>
      {error && <p>{error}</p>}
      <AddForm {...{ todo, setTodo, handleSubmit }} />
    </div>
  );
}
