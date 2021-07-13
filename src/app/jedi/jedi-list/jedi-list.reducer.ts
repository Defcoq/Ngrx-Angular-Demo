import { ADD_JEDI, LOAD_JEDIS, REMOVE_JEDI } from '../jedi-list/jedi.constants';

const initialState: any[] = [];
export function jediListReducer(state = initialState , action: any) {
  switch (action.type) {
    case 'ADD_JEDI':
      return [...state, { ...action.payload }];
    case 'REMOVE_JEDI':
      return state.filter((jedi:any) => jedi.id !== action.payload.id);
    case 'LOAD_JEDIS':
      return action.payload.map((jedi: any) => ({ ...jedi }));
    default:
      return state;
  }
}
