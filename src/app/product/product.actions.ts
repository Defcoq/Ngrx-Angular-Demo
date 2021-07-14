import {
  FETCHING_PRODUCTS,
  FETCHING_PRODUCTS_ERROR,
  FETCHING_PRODUCTS_SUCCESSFULLY,
} from './product.constants';

export const fetchSuccessfully = (products: any) => ({
  type: FETCHING_PRODUCTS_SUCCESSFULLY,
  payload: products,
});
export const fetchError = (error: any) => ({
  type: FETCHING_PRODUCTS_ERROR,
  payload: error,
});
export const fetchProductsSuccessfully = (products: any) => ({
  type: FETCHING_PRODUCTS_SUCCESSFULLY,
  payload: products,
});
export const fetchProducts = () => ({ type: FETCHING_PRODUCTS });
