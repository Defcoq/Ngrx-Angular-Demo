import { ActionReducerMap } from "@ngrx/store";
import { Counter } from "./counter/counter-list/counter.model";
import { counterListReducer } from "./counter/counter-list/counter-list.reducer";

export interface CounterState {
  data: number;
 // list: Array<Counter>;
}
export const reducers: ActionReducerMap<CounterState> = {
  data: counterReducer,
 // list: counterListReducer
};

export function counterReducer(state = 0, action:any) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}
