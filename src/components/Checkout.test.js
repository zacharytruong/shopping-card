import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Checkout from './CheckOut';

describe('Checkout component when order is 0', () => {
  it('should render empty cart text', () => {
    const fakedOrders = [];
    render(
      <BrowserRouter>
        <Checkout orders={fakedOrders} />
      </BrowserRouter>
    );
    const message = screen.getByRole('alert');
    expect(message.textContent).toMatch(/Your cart is empty./i);
  });
  it('should render shop button', () => {
    const fakedOrders = [];
    render(
      <BrowserRouter>
        <Checkout orders={fakedOrders} />
      </BrowserRouter>
    );
    const button = screen.getByRole('button', { name: /shop your cruises/i });
    expect(button.textContent).toMatch(/shop your cruises/i);
  });
  it('should navigate to shop page if user clicks on shop button', () => {
    const fakedOrders = [];
    render(
      <BrowserRouter>
        <Checkout orders={fakedOrders} />
      </BrowserRouter>
    );
    const button = screen.getByRole('button', { name: /shop your cruises/i });
    userEvent.click(button);
    expect(window.location.pathname).toMatch(/\/shop/i);
  });
});

describe('Checkout component when order is > 0', () => {
  it('should render all list item of all orders', () => {
    const fakedOrders = [
      {
        ship: 'WONDER OF THE SEAS',
        destination: 'Bahamas',
        duration: 3,
        price: 490,
        image: 'wonderOfTheSeas',
        quantity: 3
      },
      {
        ship: 'HARMONY OF THE SEAS',
        destination: 'Western Caribbean',
        duration: 4,
        price: 300,
        image: 'harmonyOfTheSeas',
        quantity: 4
      },
      {
        ship: 'MARINER OF THE SEAS',
        destination: 'Perfect Day Getaway',
        duration: 2,
        price: 230,
        image: 'marinerOfTheSeas',
        quantity: 5
      }
    ];
    render(
      <BrowserRouter>
        <Checkout orders={fakedOrders} />
      </BrowserRouter>
    );
    const list = screen.getByRole('list', { name: /allOrdersList/i });
    const listitems = within(list).getAllByRole('listitem');
    expect(listitems.length).toBe(3);
  });
  it('should render total price correctly', () => {
    const fakedOrders = [
      {
        price: 2,
        quantity: 3
      },
      {
        price: 3,
        quantity: 2
      },
      {
        price: 1,
        quantity: 3
      }
    ];
    render(
      <BrowserRouter>
        <Checkout orders={fakedOrders} />
      </BrowserRouter>
    );
    const total = screen.getByRole('note', { name: /totalprice/i });
    expect(total.textContent).toBe('15');
  });
});
