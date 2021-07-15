import {
  ADD_PRODUCT,
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_SUCCESSFULLY,
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
export const addProductSuccessfully = (product: any) => ({
  type: ADD_PRODUCT_SUCCESSFULLY,
  payload: product,
});
export const addProduct = (product: any) => ({
  type: ADD_PRODUCT,
  payload: product,
});
export const addProductError = (error: any) => ({
  type: ADD_PRODUCT_ERROR,
  payload: error,
});
