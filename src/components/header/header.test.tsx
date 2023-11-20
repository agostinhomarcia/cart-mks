import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Header from './header';

jest.mock('../cart/cart', () => {
  return () => null;
});

test('renders the header without the cart', () => {
  const { getByText, queryByTestId } = render(<Header />);

  const headerFirstText = getByText('MKS');
  expect(headerFirstText).toBeInTheDocument();

  const headerLastText = getByText('Sistemas');
  expect(headerLastText).toBeInTheDocument();

  const cartComponent = queryByTestId('cart-mock');
  expect(cartComponent).toBeNull();
});
