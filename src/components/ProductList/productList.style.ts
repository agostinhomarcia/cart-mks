import styled from 'styled-components';
import Media from '../mediaQueries/mediaQueries';

export const ContainerProductList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80%;
  ${Media.tabletL`
  margin-top: 50px;
  `}
`;
export const ContainProductList = styled.div`
  width: 938px;
  min-height: 601px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  ${Media.tabletL`
  width: 80%;
  `}

  ${Media.mobileL`
  width: 100%;
  `}
  ${Media.mobileM`
  width: 90%;
  `}
`;
