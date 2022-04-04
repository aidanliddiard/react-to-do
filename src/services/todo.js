import { checkError, client } from './client';

export async function fetchToDos() {
  const resp = await client.from('todos').select('*').order('id');
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

export async function completeTodo(id, complete) {
  const resp = await client.from('todos').update({ complete }).match({ id });
  return checkError(resp);
}
