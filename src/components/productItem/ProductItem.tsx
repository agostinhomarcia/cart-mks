"use client";

import { useCartContext } from "@/provider/useCartContext";
import Image from "next/image";
import { useContext } from "react";
import { formatNumber } from "../helpers/formatNumber";
import { ProductItemProps, quantity } from "./productItem.interface";
import {
  ButtonPurchase,
  ContainerProduct,
  ProductDescription,
  ProductInfo,
  ProductName,
  ProductPrice,
} from "./productItem.style";

const ProductItem = ({ product }: ProductItemProps) => {
  const { addProductToCart } = useContext(useCartContext);

  const handleAddToCartClick = () => {
    addProductToCart({ ...product, quantity });
  };

  return (
    <>
      <ContainerProduct>
        <Image
          src={product.photo}
          alt={product.name}
          width={131}
          height={138}
          quality={100}
          priority
        />

        <div>
          <ProductDescription>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>R${formatNumber(Number(product.price))}</ProductPrice>
          </ProductDescription>
        </div>
        <ProductInfo>
          Redesigned from scratch and completely revised.
        </ProductInfo>
        <ButtonPurchase
          onClick={handleAddToCartClick}
          data-testid="button-add-cart"
        >
          <Image
            src="/bag.svg"
            alt="/bag"
            width={12}
            height={13.5}
            quality={100}
            priority
          />
          COMPRAR
        </ButtonPurchase>
      </ContainerProduct>
    </>
  );
};

export default ProductItem;
