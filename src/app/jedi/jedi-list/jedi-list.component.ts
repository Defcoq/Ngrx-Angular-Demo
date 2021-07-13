import { addJedi, loadJedis, removeJedi } from './jedi.actions';

import { AppState } from 'src/app/app-state';
import { Component } from '@angular/core';
import { Jedi } from './jedi.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'jedi-list',
  template: `
    <div *ngFor="let jedi of list$ | async">
      {{ jedi.name }}<button (click)="remove(jedi.id)">Remove</button>
    </div>
    <input [(ngModel)]="newJedi" placeholder="" />
    <button (click)="add()">Add</button>
    <button (click)="clear()">Clear</button>
  `,
})
export class JediListComponent {
  list$: Observable<Array<Jedi>>;
  counter = 0;
  newJedi = '';
  constructor(private store: Store<AppState>) {
    this.list$ = store.select('jediList');
  }
  add() {
   /* this.store.dispatch({
      type: 'ADD_JEDI',
      payload: { id: this.counter++, name: this.newJedi },
    });*/

    this.store.dispatch(addJedi(this.counter++, this.newJedi));
    this.newJedi = '';
  }
  remove(id: number) {
   // this.store.dispatch({ type: 'REMOVE_JEDI', payload: { id } });
    this.store.dispatch(removeJedi(this.counter++));
  }
  clear() {
    //this.store.dispatch({ type: 'LOAD_JEDIS', payload: [] });
    this.store.dispatch(loadJedis([] ));
    this.counter = 0;
  }
}
