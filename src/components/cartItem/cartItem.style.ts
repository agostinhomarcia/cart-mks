import styled from "styled-components";
import Media from "../mediaQueries/mediaQueries";

export const ContainerCartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
  width: 379px;
  height: 95px;
  margin-top: 22px;
  ${Media.mobileM`
  width: 280px;
  height: 65px;

  `}
`;
export const ContentCartItem = styled.div`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const RemoveItemCart = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-top: -85px;
  margin-right: -370px;
  cursor: pointer;

  &::before {
    content: "X";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    position: absolute;
    color: #fff;
  }
  ${Media.mobileM`
  margin-right: -270px;
  margin-top: -55px;

  `}
`;
export const CartItemName = styled.p`
  color: #2c2c2c;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  width: 113px;
  ${Media.mobileM`
  width: 80px;
  overflow:hidden;
  text-overflow: ellipsis;
  height: 30px;
  `}
`;
export const CartItemContainerQtd = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -10px;
`;
export const CartItemQtdText = styled.p`
  color: #000;
  font-size: 7px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 4px;
`;
export const CartItemContentQtd = styled.div`
  border-radius: 4px;
  border: 0.3px solid #bfbfbf;
  width: 50px;
  height: 19px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    color: #bfbfbf;
    width: 1px;
    height: 11.5px;
  }
`;

export const CartItemPrice = styled.span`
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
  position: relative;
`;

const ButtonMixStyles = styled.button`
  border: none;
  position: relative;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8.5px 7px;
  background-color: transparent;
  cursor: pointer;
  &::before {
    font-size: 12px;
    font-style: normal;
    width: 5px;
    font-weight: 400;
    line-height: normal;
    position: absolute;
  }
`;
export const ButtonDecrease = styled(ButtonMixStyles)`
  &::before {
    content: "-";
  }
`;

export const ButtonIncrease = styled(ButtonMixStyles)`
  &::before {
    content: "+";
  }
`;
