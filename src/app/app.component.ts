import { AppState } from "./app-state";
import { Component } from "@angular/core";
import { CounterState } from "./reducer";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-root",
  template: `
    {{ counter }}
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
    <jedi-list></jedi-list>
    <br/>
    <br />
    <products></products>
  `,
})
export class AppComponent {
  title = "ngrx-from-scrach-book";
  //counter$ : Observable<CounterState>;
  counter: number | undefined;
  constructor(private store: Store<AppState>) {
    store.select("counter").subscribe(x=>{
      this.counter = x.data;
    });

   // this.counter$ = this.store.select((state) => { return state.counter.data; });
  }

  increment() {
    this.store.dispatch({ type: "INCREMENT" });
  }

  decrement() {
    this.store.dispatch({ type: "DECREMENT" });
  }
}
