import { createReducer, on } from '@ngrx/store';
// import { Product } from './models/product';
import * as ProductActions from './product.actions';

export interface ProductState {
  products: any[];
  selectedProduct: any | null;
  error: any;
}

export const initialProductState: ProductState = {
  products: [],
  selectedProduct: null,
  error: null
};

export const productReducer = createReducer(
  initialProductState,
  on(ProductActions.loadProductsSuccess, (state, { products }) => ({ ...state, products })),
  on(ProductActions.loadProductsFailure, (state, { error }) => ({ ...state, error })),
  on(ProductActions.selectProduct, (state, { productId }) => ({ ...state, selectedProduct: state.products.find(p => p.id === productId) || null })),
);
