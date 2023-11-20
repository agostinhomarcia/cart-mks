import { ContainerFooter, Copyright } from './footer.styled';

const Footer = () => {
  return (
    <ContainerFooter data-testid='footer-component'>
      <Copyright>MKS sistemas &copy; Todos os direitos reservados</Copyright>
    </ContainerFooter>
  );
};

export default Footer;
