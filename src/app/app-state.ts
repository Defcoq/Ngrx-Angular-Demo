import { CounterState } from "./reducer";
import { Jedi } from "./jedi/jedi-list/jedi.model";

export interface AppState {
 counter: CounterState;
  jediList: Array<Jedi>;
}
