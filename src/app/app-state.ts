import { Jedi } from "./jedi/jedi-list/jedi.model";

export interface AppState {
  counter: number;
  jediList: Array<Jedi>;
}
