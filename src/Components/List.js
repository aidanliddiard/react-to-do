import './List.css';

export default function List({ todos, deleteHandler, error, completedHandler }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={() => completedHandler(todo.id, !todo.complete)}
          />
          {todo.todo}
          <button onClick={() => deleteHandler(todo.id)}>Delete</button>
          {error && <p>{error}</p>}
        </li>
      ))}
    </ul>
  );
}
