import { Action, StoreModule } from "@ngrx/store";

import { ActionReducerMap } from "@ngrx/store/src/models";
import { BrowserModule } from "@angular/platform-browser";
import { EffectsModule } from "@ngrx/effects";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ProductComponent } from "./product.component";
import { ProductEffects } from "./product.effect";
import { ProductReducers } from "./product.reducer";

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forFeature("featureProducts", ProductReducers),
    EffectsModule.forFeature([ProductEffects]),
    HttpClientModule
  ],
  exports: [ProductComponent],
  declarations: [ProductComponent],
  providers: []
})
export class ProductModule {}
