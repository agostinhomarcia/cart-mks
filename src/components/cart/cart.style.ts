import styled from "styled-components";
import Media from "../mediaQueries/mediaQueries";
import { ContentCartProps } from "./cartItem.interface";

export const ContainerCart = styled.div`
  width: 90px;
  height: 45px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: #fff;
  justify-content: space-evenly;
`;
export const CartQtd = styled.p`
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const ContentCart = styled.div<ContentCartProps>`
  width: 486px;
  display: ${({ $active }) => ($active ? "flex" : "none")};
  position: absolute;
  background-color: #0f52ba;
  height: 100vh;
  flex-direction: column;
  top: 0;
  right: 0;
  ${Media.mobileM`
  width: 100%;
  position: fixed;
  overflow-y: hidden;
  `}
`;
export const CartHeader = styled.div`
  display: flex;
  color: #fff;
  justify-content: space-between;
  padding-top: 36px;
  padding: 36px 22px 0 47px;
`;
export const CartTitle = styled.h2`
  color: #fff;
  font-size: 27px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 180px;
`;
export const CartContentItems = styled.div`
  padding: 0px 22px 0 47px;
  margin-top: 43px;
  height: 550px;
  max-height: 550px;
  overflow-y: auto;
  flex-direction: column;
  position: relative;
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #0a6aff;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #093b89;
  }
  ${Media.mobileM`
  height: 350px;

  `}
`;
export const CloseCartButton = styled.button`
  background-color: transparent;
  border: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  cursor: pointer;
  img {
    flex-shrink: 0;
  }

  &::before {
    content: "X";
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px;
    position: absolute;
    color: #fff;
  }
`;
export const EmptyCart = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const EmptyCartText = styled(CartTitle)`
  margin-top: 100px;
  font-size: 20px;
  font-weight: 400;
  width: 52%;
  ${Media.mobileM`
  width: 100%;
  `}
`;
export const CartTotalPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
  padding: 0px 22px 0 47px;
  margin-top: 50px;
  color: #fff;
  ${Media.mobileM`
  margin-top: 30px;
  width: 93%;

  `}
`;

export const ButtonFinalize = styled.button`
  width: 100%;
  border: none;
  background-color: #000;
  height: 97px;
  position: absolute;
  bottom: 0;
  font-size: 28px;
  font-style: normal;
  color: #fff;
  font-weight: 700;
  line-height: 15px;
  cursor: pointer;
`;
