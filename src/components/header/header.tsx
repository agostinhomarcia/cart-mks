import Cart from '../cart/cart';
import {
  HeaderBrand,
  HeaderBrandFirstName,
  HeaderBrandLastName,
  HeaderContainer,
} from './header.style';

const Header = () => {
  return (
    <HeaderContainer data-testid='header-component'>
      <HeaderBrand>
        <HeaderBrandFirstName>MKS</HeaderBrandFirstName>
        <HeaderBrandLastName>Sistemas</HeaderBrandLastName>
      </HeaderBrand>
      <Cart />
    </HeaderContainer>
  );
};

export default Header;
