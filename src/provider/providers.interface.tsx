import { Product } from '@/components/helpers/product.interface';

export interface CartProduct extends Product {
  quantity: number;
}

export interface ICartContext {
  products: CartProduct[];
  cartTotalPrice: number;
  cartBasePrice: number;
  total: number;
  addProductToCart: (product: CartProduct) => void;
  increaseProductQuantity: (productId: number) => void;
  decreaseProductQuantity: (productId: number) => void;
  removeProductFromCart: (productId: number) => void;
}
