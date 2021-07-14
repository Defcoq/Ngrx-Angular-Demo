import {
  ADD_COUNTER_ITEM,
  REMOVE_COUNTER_ITEM,
} from './counter-list.constants';

export const addItem = (title:string, id:number) => ({
  type: ADD_COUNTER_ITEM,
  payload: { id, title },
});
export const removeItem = (id:number) => ({
  type: REMOVE_COUNTER_ITEM,
  payload: { id },
});
