import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from './counter.module';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JediModule } from './jedi/jedi.module';
import { NgModule } from '@angular/core';
import { ProductModule } from './product/product.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
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
    CounterModule,
    ProductModule,
    HttpClientModule,
    //StoreModule.forRoot({ counter: counterReducer ,jediList: jediListReducer}),
    StoreModule.forRoot({jediList: jediListReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
