import './List.css';

export default function List({ todos, deleteHandler, error }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.complete === true && <p className="complete">✅ </p>}
          {todo.todo}
          <button onClick={() => deleteHandler(todo.id)}>Delete</button>
          {error && <p>{error}</p>}
        </li>
      ))}
    </ul>
  );
}
