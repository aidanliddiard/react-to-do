import { checkError, client } from './client';

export async function fetchToDos() {
  const resp = await client.from('todos').select('*');
  return checkError(resp);
}
