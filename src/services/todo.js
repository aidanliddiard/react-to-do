import { checkError, client } from './client';

export async function fetchToDos() {
  const resp = await client.from('todos').select('*');
  return checkError(resp);
}

export async function addToDo(todo) {
  const resp = await client.from('todos').insert({ todo: todo, complete: false });
  return checkError(resp);
}

export async function deleteTodo(id) {
  const resp = await client.from('todos').delete('*').match({ id });
  return checkError(resp);
}
