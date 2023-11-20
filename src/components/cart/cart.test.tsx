import { CartProduct } from '@/provider/providers.interface';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Cart from './cart';

jest.mock('../cartItem/cartItem', () => {
  return () => <div data-testid='cartItem-mock'></div>;
});

describe('Cart component', () => {
  let mockCartContext: {
    products: CartProduct[];
    total: number;
  };

  beforeEach(() => {
    mockCartContext = {
      products: [],
      total: 0,
    };
  });

  it('renders empty cart message', () => {
    render(<Cart />);

    expect(
      screen.getByText('Carrinho vazio! Vamos fazer compras?')
    ).toBeInTheDocument();
    expect(screen.queryByTestId('cartItem-mock')).toBeNull();
  });

  it('does not render finalize purchase button', () => {
    render(<Cart />);

    expect(screen.queryByText('Finalizar Compra')).toBeInTheDocument();
  });

  it('opens and closes the cart correctly', () => {
    render(<Cart />);

    const cartContainer = screen.getByTestId('cart-container');
    const closeCartButton = screen.getByTestId('close-cart-button');

    expect(cartContainer).toHaveAttribute('data-testid', 'cart-container');
    expect(cartContainer).not.toHaveClass('open');

    fireEvent.click(cartContainer);
    expect(cartContainer).toHaveClass('open');

    fireEvent.click(closeCartButton);
    expect(cartContainer).not.toHaveClass('open');
  });

  it('should render the cart total when there are products', () => {
    render(<Cart />);
    expect(screen.queryByText('Total')).not.toBeInTheDocument();
  });
});
