import { CartProduct } from '@/provider/providers.interface';

export interface CartItemProps {
  product: CartProduct;
}
export interface ContentCartProps {
  $active?: boolean;
}
