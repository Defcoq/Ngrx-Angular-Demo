import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { JediModule } from './jedi/jedi.module';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from "./reducer";
import { jediListReducer } from './jedi/jedi-list/jedi-list.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    JediModule,
    StoreModule.forRoot({ counter: counterReducer ,jediList: jediListReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
