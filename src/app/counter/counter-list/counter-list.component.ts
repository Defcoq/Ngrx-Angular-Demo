import { Component, OnInit } from '@angular/core';
import { addItem, removeItem } from './counter-list.actions';

import { AppState } from '../../app-state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css'],
})
export class CounterListComponent implements OnInit {
  list$ : any;
  newItem: string ='';
  counter: number;
  constructor(private store: Store<AppState>) {
    this.counter = 0;
    this.list$ = this.store.select((state) => state.counter.data);
  }
  ngOnInit() {}
  add() {
    this.store.dispatch(addItem(this.newItem, this.counter++));
    this.newItem = '';
  }
  remove(id:number) {
    this.store.dispatch(removeItem(id));
  }
}
