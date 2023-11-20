import { Product } from './product.interface';

export interface ProductWithTotalPrice extends Product {
  totalPrice: number;
}
