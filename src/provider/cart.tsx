'use client';

import { ReactNode, useMemo, useState } from 'react';

import { CartProduct } from './providers.interface';
import { useCartContext } from './useCartContext';

const CartProvider = ({ children }: { children: ReactNode }) => {
  const CartContext = useCartContext;
  const [products, setProducts] = useState<CartProduct[]>([]);

  const total = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + Number(product.price) * product.quantity;
    }, 0);
  }, [products]);

  const addProductToCart = (product: CartProduct) => {
    const productIsAlreadyOnCart = products.some(
      (cartProduct) => cartProduct.id === product.id
    );

    if (productIsAlreadyOnCart) {
      setProducts((prev) =>
        prev.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            };
          }

          return cartProduct;
        })
      );

      return;
    }

    setProducts((prev) => [...prev, product]);
  };

  const decreaseProductQuantity = (productId: number) => {
    setProducts((prev) =>
      prev
        .map((cartProduct) => {
          if (cartProduct.id === productId) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity - 1,
            };
          }

          return cartProduct;
        })
        .filter((cartProduct) => cartProduct.quantity > 0)
    );
  };

  const increaseProductQuantity = (productId: number) => {
    setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          };
        }

        return cartProduct;
      })
    );
  };

  const removeProductFromCart = (productId: number) => {
    setProducts((prev) =>
      prev.filter((cartProduct) => cartProduct.id !== productId)
    );
  };

  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
        decreaseProductQuantity,
        increaseProductQuantity,
        removeProductFromCart,
        total,
        cartTotalPrice: 0,
        cartBasePrice: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
