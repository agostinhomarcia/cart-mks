import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { formatNumber } from '../helpers/formatNumber';
import CartItem from './cartItem';
const mockProduct = {
  id: 1,
  name: 'Produto 1',
  photo: 'https://caminho/para/imagem.jpg',
  quantity: 2,
  price: '100.00',
  brand: 'HyperX',
  description: 'Descrição do produto',
  createdAt: '2023-10-30T16:25:01.093Z',
  updatedAt: '2023-10-30T16:25:01.093Z',
};

describe('CartItem component', () => {
  test('renders cart item correctly', () => {
    render(<CartItem product={mockProduct} />);

    const productName = screen.getByText('Produto 1');
    expect(productName).toBeInTheDocument();

    const increaseButton = screen.getByTestId('button-increase');
    const decreaseButton = screen.getByTestId('button-decrease');
    expect(increaseButton).toBeInTheDocument();
    expect(decreaseButton).toBeInTheDocument();

    const removeButton = screen.getByTestId('button-remove');
    expect(removeButton).toBeInTheDocument();
  });

  test('interacts with cart item buttons', () => {
    render(<CartItem product={mockProduct} />);

    const decreaseButton = screen.getByTestId('button-decrease');
    const increaseButton = screen.getByTestId('button-increase');
    const removeButton = screen.getByTestId('button-remove');

    fireEvent.click(decreaseButton);
    expect(screen.getByTestId('button-decrease')).toBeInTheDocument();

    fireEvent.click(increaseButton);
    expect(screen.getByTestId('button-increase')).toBeInTheDocument();

    fireEvent.click(removeButton);
    expect(screen.queryByText('Produto 1')).toBeInTheDocument();
  });
});
jest.mock('@/provider/useCartContext');

describe('CartItem component', () => {
  test('correctly formats a number to currency format', () => {
    const number = 1000;
    const formatted = formatNumber(number);

    expect(formatted).toBe('1.000');
  });
});
