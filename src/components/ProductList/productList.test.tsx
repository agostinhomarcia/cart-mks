import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ProductWithTotalPrice } from '../helpers/helpers.interface';
import ProductList from './productList';

const products: ProductWithTotalPrice[] = [
  {
    id: 1,
    name: 'airpods',
    brand: 'Apple',
    description: 'Criados pela Apple Ligam e se conectam automaticamente.',
    photo:
      'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperx-cloudrevolver.webp',
    price: '1000.00',
    totalPrice: 100,
  },
];

describe('ProductList component', () => {
  let mockCartContext: {
    products: ProductWithTotalPrice[];
    total: number;
  };

  beforeEach(() => {
    mockCartContext = {
      products,
      total: 1000,
    };

    jest.mock('@/provider/useCartContext', () => ({
      useCartContext: () => mockCartContext,
    }));
  });

  it('renders product list correctly', () => {
    render(<ProductList products={products} />);

    const productListContainer = screen.getByTestId('product-list-component');
    expect(productListContainer).toBeInTheDocument();

    products.forEach((product) => {
      const productName = screen.getByText(product.name);
      expect(productName).toBeInTheDocument();
    });
  });
});
