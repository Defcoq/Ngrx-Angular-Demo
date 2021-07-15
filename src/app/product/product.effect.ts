import { ADD_PRODUCT, FETCHING_PRODUCTS } from "./product.constants";
import { Actions, Effect, createEffect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { addProductError, addProductSuccessfully, fetchError, fetchProductsSuccessfully } from "./product.actions";
import { catchError, delay, map, switchMap } from "rxjs/operators";

import { Action } from "@ngrx/store";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

;


@Injectable()
export class ProductEffects {

  productsAdd$ = createEffect(() => this.actions$.pipe(
    ofType(ADD_PRODUCT),
    switchMap((action:any) => this.http
      .post("products/", action.payload).pipe(
        delay(3000),
        map(addProductSuccessfully),
        catchError(err => of(addProductError(err)))
      )
    )
  ));

  productsGet$ = createEffect(() => this.actions$.pipe(
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


 /* products$ = createEffect(() => this.actions$.pipe(
    ofType(FETCHING_PRODUCTS),
    switchMap(action => this.http
      .get("/assets/products.json")
      .pipe(
        delay(3000),
        map(fetchProductsSuccessfully),
        catchError(err => of(fetchError(err)))
      )
    )
  ));*/
  //products$: Observable<Action> =

  constructor(private actions$: Actions<Action>, private http: HttpClient) {
    console.log("product effects init");
  }
}
