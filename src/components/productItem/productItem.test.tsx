import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { formatNumber } from '../helpers/formatNumber';
import ProductItem from './ProductItem';

const product = {
  id: 1,
  name: 'airpods',
  brand: 'Apple',
  description: 'Criados pela Apple Ligam e se conectam automaticamente.',
  photo:
    'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperx-cloudrevolver.webp',
  price: '1000.00',

  totalPrice: 100,
};
describe('ProductItem component', () => {
  it('renders product name', () => {
    render(<ProductItem product={product} />);

    const productName = screen.getByText(product.name);
    expect(productName).toBeInTheDocument();
  });

  it('renders product price', () => {
    render(<ProductItem product={product} />);

    const productPrice = screen.getByText(
      `R$${formatNumber(Number(product.price))}`
    );
    expect(productPrice).toBeInTheDocument();
  });

  it('renders add to cart button', () => {
    render(<ProductItem product={product} />);

    const addToCartButton = screen.getByTestId('button-add-cart');
    fireEvent.click(addToCartButton);

    expect(addToCartButton).toBeInTheDocument();
    expect(addToCartButton.textContent).toBe('COMPRAR');
  });
});
