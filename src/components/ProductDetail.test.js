import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Shop from './Shop';

describe('Product Detail component', () => {
  it('should display product info correctly', () => {
    const fakedProducts = [
      {
        id: 4,
        ship: 'NAVIGATOR OF THE SEAS',
        destination: 'Catalina',
        duration: 4,
        price: 159,
        image: 'navigatorOfTheSeas'
      }
    ];
    render(
      <MemoryRouter initialEntries={['/shop']}>
        <Shop products={fakedProducts} />
      </MemoryRouter>
    );

    const img = screen.getByRole('img');
    userEvent.click(img);
    const heading = screen.getByRole('heading', { name: /Catalina/i });
    expect(heading).toBeInTheDocument();
  });
  it.skip('should capture order quantity correctly', () => {
    const fakedProducts = [
      {
        id: 4,
        ship: 'NAVIGATOR OF THE SEAS',
        destination: 'Catalina',
        duration: 4,
        price: 159,
        image: 'navigatorOfTheSeas'
      }
    ];
    render(
      <MemoryRouter initialEntries={['/shop']}>
        <Shop products={fakedProducts} />
      </MemoryRouter>
    );

    const img = screen.getByRole('img', { name: /featuredimage4/i });
    userEvent.click(img);
    const input = screen.getByRole('spinbutton', { name: /quantity/i });
    userEvent.type(input, '5123');
    expect(input.value).toBe('5123');
  });
  it.skip('should submit order to the orders correctly', () => {
    const order = {
      id: 4,
      ship: 'NAVIGATOR OF THE SEAS',
      destination: 'Catalina',
      duration: 4,
      price: 159,
      image: 'navigatorOfTheSeas',
      quantity: 2
    };
    const orders = [];
    const fakedProducts = [
      {
        id: 4,
        ship: 'NAVIGATOR OF THE SEAS',
        destination: 'Catalina',
        duration: 4,
        price: 159,
        image: 'navigatorOfTheSeas'
      }
    ];
    const fakedAddToOrder = jest.fn().mockReturnValue([order])
    render(
      <MemoryRouter initialEntries={['/shop']}>
        <Shop products={fakedProducts} />
      </MemoryRouter>
    );
    const button = screen.getByRole('button', { name: /add to cart/i });
    userEvent.click(button);
    expect(orders.length).toBe(2);
  });
});
