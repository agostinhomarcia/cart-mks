import styled from 'styled-components';
import Media from '../mediaQueries/mediaQueries';

export const ContainerProduct = styled.div`
  width: 217.56px;
  height: 285px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 0 0 8px 8px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);

  & > img:first-of-type {
    margin: 10px 0;
    width: 131px;
    height: 138px;
    ${Media.mobileM`
    width: 71px;
    height: 78px;
    `}
  }
  ${Media.mobileM`
  width: 157.56px;
  height: 225px;
  margin-top: 20px;
  `}
`;
export const ProductDescription = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
export const ProductName = styled.p`
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  color: #2c2c2c;
  width: 124px;
  ${Media.mobileM`
  font-size: 12px;
  width: 75px;
  overflow:hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  `}
`;
export const ProductPrice = styled.p`
  font-size: 15px;
  line-height: 15px;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  background-color: #373737;
  height: 18px;
  padding: 12px 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${Media.mobileM`
  font-size: 12px;
  padding: 10px 4px;

  `}
`;
export const ProductInfo = styled.p`
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  color: #2c2c2c;
  width: 191px;
  ${Media.mobileM`
  width: 121px;
  `}
`;
export const ButtonPurchase = styled.button`
  display: flex;
  background-color: #0f52ba;
  color: #fff;
  border: none;
  width: 100%;
  height: 31.91px;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  border-radius: 0 0 8px 8px;
  cursor: pointer;
  img {
    margin-right: 14px;
    width: auto;
    height: auto;
  }
`;
