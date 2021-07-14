import { Actions, Effect, createEffect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { catchError, delay, map, switchMap } from "rxjs/operators";
import { fetchError, fetchProductsSuccessfully } from "./product.actions";

import { Action } from "@ngrx/store";
import { FETCHING_PRODUCTS } from "./product.constants";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

;


@Injectable()
export class ProductEffects {
  products$ = createEffect(() => this.actions$.pipe(
    ofType(FETCHING_PRODUCTS),
    switchMap(action => this.http
      .get("/assets/products.json")
      .pipe(
        delay(3000),
        map(fetchProductsSuccessfully),
        catchError(err => of(fetchError(err)))
      )
    )
  ));
  //products$: Observable<Action> =

  constructor(private actions$: Actions<Action>, private http: HttpClient) {
    console.log("product effects init");
  }
}
