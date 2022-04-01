import { checkError, client } from './client';

export async function fetchToDos() {
  const resp = await client.from('todos').select('*');
  return checkError(resp);
}

export async function addToDo(todo) {
  console.log(todo);
  const resp = await client.from('todos').insert({ todo: todo, complete: false });
  return checkError(resp);
}
