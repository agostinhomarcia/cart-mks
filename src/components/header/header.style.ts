import styled from 'styled-components';
import Media from '../mediaQueries/mediaQueries';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  background-color: #0f52ba;
  flex-shrink: 0;
  height: 101px;
  align-items: center;
  justify-content: space-between;
  padding: 0 65px;
  ${Media.mobileM`
  padding: 0 35px;
  `}
`;
export const HeaderBrand = styled.div`
  display: flex;
`;
export const HeaderBrandFirstName = styled.p`
  font-size: 40px;
  color: #fff;
  font-weight: 600;
  line-height: 19px;
  font-style: normal;
`;
export const HeaderBrandLastName = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 19px;
  color: #fff;
`;
