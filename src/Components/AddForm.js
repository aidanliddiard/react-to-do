import React from 'react';

export default function AddForm({ todo, setTodo, handleSubmit }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Todo: <input type="type" value={todo} onChange={(e) => setTodo(e.target.value)} />
        </label>
        <button>Add</button>
      </form>
    </div>
  );
}
