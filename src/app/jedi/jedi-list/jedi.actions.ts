import { ADD_JEDI, LOAD_JEDIS, REMOVE_JEDI } from './jedi.constants';

export const addJedi = (id: any, name: any) => ({
  type: ADD_JEDI,
  payload: { id, name },
});

export const removeJedi = (id: number) => ({
  type: REMOVE_JEDI,
  payload: { id },
});
export const loadJedis = (jedis: any) => ({ type: LOAD_JEDIS, payload: jedis });
