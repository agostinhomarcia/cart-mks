'use client';

import Image from 'next/image';
import { useContext, useState } from 'react';
import { useCartContext } from '../../provider/useCartContext';
import CartItem from '../cartItem/cartItem';
import { formatNumber } from '../helpers/formatNumber';
import {
  ButtonFinalizePurchase,
  CartContentItems,
  CartHeader,
  CartQtd,
  CartTitle,
  CartTotalPrice,
  CloseCartButton,
  ContainerCart,
  ContentCart,
  EmptyCart,
  EmptyCartText,
} from './cart.style';

const Cart = () => {
  const { products, total } = useContext(useCartContext);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => {
    !isOpen && setIsOpen(true);
  };

  const closeCart = () => {
    isOpen && setIsOpen(false);
  };
  return (
    <ContainerCart
      className={isOpen ? 'open' : 'close'}
      onClick={openCart}
      data-testid='cart-container'
    >
      <Image
        src='/cart.svg'
        alt='/cart.svg'
        width={18}
        height={18}
        quality={100}
        priority
      />
      <CartQtd>{products.length}</CartQtd>

      <ContentCart $active={isOpen}>
        <CartHeader>
          <CartTitle>Carrinho de Compras</CartTitle>
          <CloseCartButton onClick={closeCart} data-testid='close-cart-button'>
            <Image
              src='/ellipse.svg'
              alt='/ellipse.svg'
              width={38}
              height={38}
              quality={100}
              priority
            />
          </CloseCartButton>
        </CartHeader>
        <CartContentItems>
          {products.length > 0 ? (
            products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))
          ) : (
            <EmptyCart>
              <EmptyCartText>
                Carrinho vazio! <br />
                Vamos fazer compras?
              </EmptyCartText>
            </EmptyCart>
          )}
        </CartContentItems>
        {products.length > 0 && (
          <CartTotalPrice>
            <p>Total</p>
            <p>R$ {formatNumber(Number(total))}</p>
          </CartTotalPrice>
        )}
        <ButtonFinalizePurchase>Finalizar Compra</ButtonFinalizePurchase>
      </ContentCart>
    </ContainerCart>
  );
};

export default Cart;
