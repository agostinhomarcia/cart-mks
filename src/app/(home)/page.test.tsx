import Loading from '@/components/loading/loading';
import '@testing-library/jest-dom';
import { act, render, screen, waitFor } from '@testing-library/react';
import { useQuery } from 'react-query';
import Home from './page';

jest.mock('react-query', () => ({
  useQuery: jest.fn(),
}));

const mockedData = {
  products: [
    {
      id: 1,
      name: 'airpods',
      brand: 'Apple',
      description: 'Criados pela Apple Ligam e se conectam automaticamente.',
      photo:
        'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperx-cloudrevolver.webp',
      price: '1000.00',
      createdAt: '2023-10-30T16:25:01.093Z',
      updatedAt: '2023-10-30T16:25:01.093Z',
    },
    {
      id: 7,
      name: 'ipad',
      brand: 'Apple',
      description: 'iPad é uma linha de tablets projetada',
      photo:
        'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperx-cloudrevolver.webp',
      price: '1000.00',
      createdAt: '2023-10-30T16:25:01.093Z',
      updatedAt: '2023-10-30T16:25:01.093Z',
    },
  ],
};
describe('Home component loading', () => {
  it('deve mostrar loading ', async () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: mockedData,
      isLoading: false,
      isError: false,
    });

    render(<Loading products={mockedData.products.length} />);

    const loadingComponent = screen.getByTestId('loading-component');
    expect(loadingComponent).toBeInTheDocument();
  });
});

jest.mock('../../components/cart/cart', () => {
  return () => null;
});
jest.mock('../../components/productItem/productItem', () => {
  return () => null;
});

describe('Home component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });
  it('renders components in Home page except Cart in Header', async () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: mockedData,
      isLoading: false,
      isError: false,
    });

    render(<Home />);
    const loadingComponent = screen.getByTestId('loading-component');
    expect(loadingComponent).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(2200);
    });

    await waitFor(() => {
      expect(screen.getByTestId('header-component')).toBeInTheDocument();
      expect(screen.getByTestId('product-list-component')).toBeInTheDocument();
      expect(screen.getByTestId('footer-component')).toBeInTheDocument();
    });

    expect(screen.queryByTestId('cart-mock')).toBeNull();
    expect(screen.queryByTestId('productItem-mock')).toBeNull();
  });
});
