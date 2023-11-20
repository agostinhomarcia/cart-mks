import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { useQuery } from 'react-query';

jest.mock('react-query', () => ({
  useQuery: jest.fn(),
}));

import Loading from './loading';

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
