import { createAction, props } from '@ngrx/store';
// import { Product } from './models/product';

export const loadProducts = createAction('[Product] Load Products');

export const loadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ products: any[] }>()
);

export const loadProductsFailure = createAction(
  '[Product] Load Products Failure',
  props<{ error: any }>()
);

export const selectProduct = createAction(
  '[Product] Select Product',
  props<{ productId: number }>()
);
