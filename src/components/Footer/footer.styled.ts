import styled from 'styled-components';
import Media from '../mediaQueries/mediaQueries';

export const ContainerFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 40px;
`;
export const Copyright = styled.p`
  color: #000;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.63px;
  ${Media.tabletL`
  margin-bottom: 20px;
    `}
`;
