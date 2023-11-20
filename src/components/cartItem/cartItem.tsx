'use client';

import { useCartContext } from '@/provider/useCartContext';
import Image from 'next/image';
import { useContext } from 'react';
import { CartItemProps } from '../cart/cartItem.interface';
import { formatNumber } from '../helpers/formatNumber';
import {
  ButtonDecrease,
  ButtonIncrease,
  CartItemContainerQtd,
  CartItemContentQtd,
  CartItemName,
  CartItemPrice,
  CartItemQtdText,
  ContainerCartItem,
  ContentCartItem,
  RemoveItemCart,
} from './cartItem.style';

const CartItem = ({ product }: CartItemProps) => {
  const {
    increaseProductQuantity,
    decreaseProductQuantity,
    removeProductFromCart,
  } = useContext(useCartContext);

  const handleDecreaseProductQuantityClick = () => {
    decreaseProductQuantity(product.id);
  };

  const handleIncreaseProductQuantityClick = () => {
    increaseProductQuantity(product.id);
  };

  const handleRemoveProductClick = () => {
    removeProductFromCart(product.id);
  };

  return (
    <ContainerCartItem>
      <ContentCartItem>
        <Image
          src={product.photo}
          alt={product.name}
          width={46}
          height={57}
          sizes='100vw'
          priority
        />

        <CartItemName>{product.name}</CartItemName>
        <CartItemContainerQtd>
          <CartItemQtdText>Qtd:</CartItemQtdText>
          <CartItemContentQtd>
            <ButtonDecrease
              onClick={handleDecreaseProductQuantityClick}
              data-testid='button-decrease'
            />
            <Image
              src={'/pipe.svg'}
              alt={'/pipe.svg'}
              width={1}
              height={11.5}
              quality={100}
              priority
            />
            <CartItemPrice>{product.quantity}</CartItemPrice>
            <Image
              src={'/pipe.svg'}
              alt={'/pipe.svg'}
              width={1}
              height={11.5}
              quality={100}
              priority
            />
            <ButtonIncrease
              onClick={handleIncreaseProductQuantityClick}
              data-testid='button-increase'
            />
          </CartItemContentQtd>
        </CartItemContainerQtd>
        <CartItemPrice>R${formatNumber(Number(product.price))}</CartItemPrice>
        <RemoveItemCart
          onClick={handleRemoveProductClick}
          data-testid='button-remove'
        >
          <Image
            src={'/ellipse.svg'}
            alt={'/ellipse.svg'}
            width={18}
            height={18}
            quality={100}
            priority
          />
        </RemoveItemCart>
      </ContentCartItem>
    </ContainerCartItem>
  );
};

export default CartItem;
