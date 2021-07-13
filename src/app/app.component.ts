import { AppState } from "./app-state";
import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-root",
  template: `
    {{ counter$ | async }}
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
    <jedi-list></jedi-list>
  `,
})
export class AppComponent {
  title = "ngrx-from-scrach-book";
  counter$ : Observable<number>;
  constructor(private store: Store<AppState>) {
    this.counter$ = store.select("counter");
  }

  increment() {
    this.store.dispatch({ type: "INCREMENT" });
  }

  decrement() {
    this.store.dispatch({ type: "DECREMENT" });
  }
}
