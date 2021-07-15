import {
  ADD_PRODUCT,
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_SUCCESSFULLY,
  FETCHING_PRODUCTS,
  FETCHING_PRODUCTS_ERROR,
  FETCHING_PRODUCTS_SUCCESSFULLY,
} from './product.constants';

import { ActionReducerMap } from '@ngrx/store/src/models';
import { Product } from './product.model';

const initialState = {
  loading: false,
  list: [] as Array<Product>,
  error: '',
};

export interface ProductState {
  loading: boolean;
  list: Array<Product>;
  error: string;
}

export interface FeatureProducts {
  products: ProductState;
}

export const ProductReducers: ActionReducerMap<FeatureProducts> = {
  // products: productReducer
  products: productReducer,
};

function addProduct(list: any, product: any) {
  return [...list, product];
}

export function productReducer(state = initialState, action: any) {
  switch (action.type) {
    case FETCHING_PRODUCTS_SUCCESSFULLY:
      return { ...state, list: action.payload, loading: false };
    case FETCHING_PRODUCTS_ERROR:
    case ADD_PRODUCT_ERROR:
      return { ...state, error: action.payload, loading: false };
    case FETCHING_PRODUCTS:
    case ADD_PRODUCT:
      return { ...state, loading: true };
    case ADD_PRODUCT_SUCCESSFULLY:
      return { ...state, list: addProduct(state.list, action.payload) };
    default:
      return state;
  }
}
