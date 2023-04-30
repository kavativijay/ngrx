import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { ProductState } from './product.reducer';

export const selectProductState = (state: AppState) => state.products;

export const getProducts = createSelector(
  selectProductState,
  (state: ProductState) => state.products
);

export const getSelectedProduct = createSelector(
  selectProductState,
  (state: ProductState) => state.selectedProduct
);
