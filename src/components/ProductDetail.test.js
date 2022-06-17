import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import Shop from './Shop';

jest.mock('react-router-dom', () => ({
  __esModule: true,
  ...jest.requireActual('react-router-dom'),
  useParams: () => {
    return { id: 1 };
  }
}));

describe('Product Detail component', () => {
  test('should display product info correctly', () => {
    const mockProducts = [
      {
        id: 1,
        ship: 'WONDER OF THE SEAS',
        destination: 'Bahamas',
        duration: 3,
        price: 5
      }
    ];
    const mockSetProducts = () => jest.fn().mockReturnValue(mockProducts);
    render(
      <MemoryRouter>
        <Shop
          products={mockProducts}
          setProducts={mockSetProducts}
          shipFilter=""
        />
      </MemoryRouter>
    );
    const img = screen.getByRole('img', { name: /featuredimage1/i });
    userEvent.click(img);
    const heading = screen.getByRole('heading', { name: /Bahamas/i });
    expect(heading).toBeInTheDocument();
  });
  test('should capture order quantity correctly', () => {
    const mockProducts = [
      {
        id: 1,
        ship: 'WONDER OF THE SEAS',
        destination: 'Bahamas',
        duration: 3,
        price: 5
      }
    ];
    const mockSetProducts = () => jest.fn().mockReturnValue(mockProducts);
    render(
      <MemoryRouter>
        <Shop
          products={mockProducts}
          setProducts={mockSetProducts}
          shipFilter=""
        />
      </MemoryRouter>
    );

    const img = screen.getByRole('img', { name: /featuredimage1/i });
    userEvent.click(img);
    const input = screen.getByRole('spinbutton', { name: /quantity/i });
    userEvent.type(input, '5123');
    expect(input.value).toBe('5123');
  });
  test('should submit order to the orders correctly', () => {
    const mockProducts = [
      {
        id: 1,
        ship: 'WONDER OF THE SEAS',
        destination: 'Bahamas',
        duration: 3,
        price: 5
      }
    ];

    const orders = [];

    const mockAddToOrder = (order) => orders.push(order);

    render(
      <MemoryRouter>
        <ProductDetail
          products={mockProducts}
          addToOrderFromProductDetail={mockAddToOrder}
        />
      </MemoryRouter>
    );
    const button = screen.getByRole('button', { name: /add to cart/i });
    userEvent.click(button);
    expect(orders.length).toBe(1);
    expect(orders[0].id).toBe(1);
    expect(orders[0].quantity).toBe(1)
  });
});
