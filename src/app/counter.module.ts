import { Action, StoreModule } from '@ngrx/store';
import { CounterState, counterReducer, reducers } from './reducer';

import { CommonModule } from '@angular/common';
import { CounterListComponent } from './counter/counter-list/counter-list.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    CounterListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

   // StoreModule.forFeature('counter',reducers)
    StoreModule.forFeature<CounterState, Action>('counter', reducers)
  ],
  exports: [CounterListComponent]
})
export class CounterModule { }
