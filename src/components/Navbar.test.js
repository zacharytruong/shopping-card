import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar component', () => {
  test('it should render logo', () => {
    const mockOrders = [
      {
        quantity: 1
      },
      {
        quantity: 3
      }
    ];
    render(
      <BrowserRouter>
        <Navbar orders={mockOrders} />
      </BrowserRouter>
    );
    const logo = screen.getByRole('img', { name: /ultimat world cruise/i });
    expect(logo).toBeInTheDocument();
  });
  test('it should go to homepage if user clicks on logo', () => {
    const mockOrders = [
      {
        quantity: 1
      },
      {
        quantity: 3
      }
    ];
    render(
      <BrowserRouter>
        <Navbar orders={mockOrders} />
      </BrowserRouter>
    );
    const logo = screen.getByRole('img', { name: /ultimat world cruise/i });
    userEvent.click(logo);
    expect(window.location.pathname).toMatch(/\/shopping-cart/i);
  });
  test('it should render shop menu item', () => {
    const mockOrders = [
      {
        quantity: 1
      },
      {
        quantity: 3
      }
    ];
    render(
      <BrowserRouter>
        <Navbar orders={mockOrders} />
      </BrowserRouter>
    );
    const shop = screen.getByRole('heading', { name: /shop/i });
    expect(shop).toBeInTheDocument();
  });
  test('should go to shop page if user clicks on shop menu', () => {
    const mockOrders = [
      {
        quantity: 1
      },
      {
        quantity: 3
      }
    ];
    render(
      <BrowserRouter>
        <Navbar orders={mockOrders} />
      </BrowserRouter>
    );
    const shop = screen.getByRole('heading', { name: /shop/i });
    userEvent.click(shop);
    expect(window.location.pathname).toMatch(/\/shop/i);
  });
  test('should render cart icon', () => {
    const mockOrders = [
      {
        quantity: 1
      },
      {
        quantity: 3
      }
    ];
    render(
      <BrowserRouter>
        <Navbar orders={mockOrders} />
      </BrowserRouter>
    );
    const cart = screen.getByRole('menuitem', { name: /carticon/i });
    expect(cart).toBeInTheDocument();
  });
  test('should go to checkout page if user clicks on cart icon', () => {
    const mockOrders = [
      {
        quantity: 1
      },
      {
        quantity: 3
      }
    ];
    render(
      <BrowserRouter>
        <Navbar orders={mockOrders} />
      </BrowserRouter>
    );
    const cart = screen.getByRole('menuitem', { name: /carticon/i });
    userEvent.click(cart);
    expect(window.location.pathname).toMatch(/\/checkout/i);
  });
  test('should render total number of orders', () => {
    const mockOrders = [
      {
        quantity: 1
      },
      {
        quantity: 3
      }
    ];
    render(
      <BrowserRouter>
        <Navbar orders={mockOrders} />
      </BrowserRouter>
    );
    const ordersQuantity = screen.getByRole('menuitem', {
      name: /ordersQuantity/i
    });
    expect(ordersQuantity.textContent).toMatch(/4/i);
  });
});
