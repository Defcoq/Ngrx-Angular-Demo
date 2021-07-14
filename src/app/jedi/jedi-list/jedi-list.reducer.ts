import { ADD_JEDI, LOAD_JEDIS, REMOVE_JEDI } from '../jedi-list/jedi.constants';

import { Jedi } from './jedi.model';

const initialState: Jedi[] = [];
export function jediListReducer(state = initialState , action: any) {
  switch (action.type) {
    case 'ADD_JEDI':
      return [...state, { ...action.payload }];
    case 'REMOVE_JEDI':
      return state.filter((jedi:Jedi) => jedi.id !== action.payload.id);
    case 'LOAD_JEDIS':
      return action.payload.map((jedi: Jedi) => ({ ...jedi }));
    default:
      return state;
  }
}
