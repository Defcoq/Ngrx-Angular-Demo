import { Component, OnInit } from '@angular/core';
import { addProduct, fetchProducts } from './product.actions';
import { getError, getList, isLoading } from './product.selectors';

import { AppProductState } from '../app-state-product';
import { AppState } from '../app-state';
import { FETCHING_PRODUCTS } from './product.constants';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'products',
  template: `
    <div>
      <input [(ngModel)]="newProduct" placeholder="new product..." />
      <button (click)="addNewProduct()"></button>
    </div>
    Products:
    <div *ngFor="let product of products$ | async">
      Product: {{ product.name }}
    </div>
    <div *ngIf="loading$ | async; let loading">
      <div *ngIf="loading">loading...</div>
    </div>
    <div *ngIf="error$ | async; let error">
      <div *ngIf="error">{{ error }}</div>
    </div>
  `,
})
export class ProductComponent implements OnInit {
  products$: Observable<Product[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;
  newProduct: string | undefined;

  constructor(private store: Store<AppProductState>) {
    this.products$ = this.store.select(getList);
    this.loading$ = this.store.select(isLoading);
    this.error$ = this.store.select(getError);
  }

  ngOnInit() {
    this.store.dispatch(fetchProducts());
  }

  addNewProduct() {
    this.store.dispatch(addProduct(this.newProduct));
    this.newProduct = '';
  }
}
