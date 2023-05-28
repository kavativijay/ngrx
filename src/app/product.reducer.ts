import { createReducer, on } from '@ngrx/store';
// import { Product } from './models/product';
import * as ProductActions from './product.actions';

export interface ProductState {
  products: Product[];
  selectedProduct: any | null;
  error: any;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
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
  on(ProductActions.selectProduct, (state, { productId }) => ({
     ...state, selectedProduct: state.products.find(p => p.id === productId)
    })),
  on(ProductActions.updateProduct, (state, { updatedProduct }) => ({ ...state, product: updatedProduct }))

);
