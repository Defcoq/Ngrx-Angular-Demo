import {
  FETCHING_PRODUCTS,
  FETCHING_PRODUCTS_ERROR,
  FETCHING_PRODUCTS_SUCCESSFULLY
} from "./product.constants";

import { ActionReducerMap } from "@ngrx/store/src/models";
import { Product } from "./product.model";

const initialState = {
  loading: false ,
  list: [] as Array<Product>,
  error: ""
};

export interface ProductState {
  loading: boolean;
  list: Array<Product> ;
  error: string ;
}

export interface FeatureProducts {
  products: ProductState ;
}

export const ProductReducers: ActionReducerMap<FeatureProducts> = {
 // products: productReducer
 products : productReducer
};

export function productReducer(state = initialState, action: any) {
  switch (action.type) {
    case FETCHING_PRODUCTS_SUCCESSFULLY:
      return { ...state, list: action.payload, loading: false };
    case FETCHING_PRODUCTS_ERROR:
      return { ...state, error: action.payload, loading: false };
    case FETCHING_PRODUCTS:
      return { ...state, loading: true };
    default:
      return state;
  }
}
