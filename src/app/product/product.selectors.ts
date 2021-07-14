import { AppProductState } from '../app-state-product';

export const getList = (state: AppProductState) =>
  state.featureProducts.products.list;
export const getError = (state: AppProductState) =>
  state.featureProducts.products.error;
export const isLoading = (state: AppProductState) =>
  state.featureProducts.products.loading;
