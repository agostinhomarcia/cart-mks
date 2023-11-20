import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Footer from './footer';

describe('Footer component', () => {
  test('renders footer text', () => {
    const { getByText } = render(<Footer />);
    const footerText = getByText('MKS sistemas © Todos os direitos reservados');
    expect(footerText).toBeInTheDocument();
  });
});
