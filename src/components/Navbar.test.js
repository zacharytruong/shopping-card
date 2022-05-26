import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar component', () => {
  it('should render logo', () => {
    const fakedOrders = [
      {
        quantity: 1
      },
      {
        quantity: 3
      }
    ];
    render(
      <BrowserRouter>
        <Navbar orders={fakedOrders} />
      </BrowserRouter>
    );
    expect(
      screen.getByRole('img', { name: /ultimat world cruise/i })
    ).toMatchSnapshot();
  });
  it('should go to homepage if user clicks on logo', () => {
    const fakedOrders = [
      {
        quantity: 1
      },
      {
        quantity: 3
      }
    ];
    render(
      <BrowserRouter>
        <Navbar orders={fakedOrders} />
      </BrowserRouter>
    );
    const logo = screen.getByRole('img', { name: /ultimat world cruise/i });
    userEvent.click(logo);
    expect(window.location.pathname).toMatch(/\//i);
  });
  it('should render shop menu item', () => {
    const fakedOrders = [
      {
        quantity: 1
      },
      {
        quantity: 3
      }
    ];
    render(
      <BrowserRouter>
        <Navbar orders={fakedOrders} />
      </BrowserRouter>
    );
    const shop = screen.getByRole('heading', { name: /shop/i });
    expect(shop).toMatchSnapshot();
  });
  it('should go to shop page if user clicks on shop menu', () => {
    const fakedOrders = [
      {
        quantity: 1
      },
      {
        quantity: 3
      }
    ];
    render(
      <BrowserRouter>
        <Navbar orders={fakedOrders} />
      </BrowserRouter>
    );
    const shop = screen.getByRole('heading', { name: /shop/i });
    userEvent.click(shop);
    expect(window.location.pathname).toMatch(/\/shop/i);
  });
  it('should render cart icon', () => {
    const fakedOrders = [
      {
        quantity: 1
      },
      {
        quantity: 3
      }
    ];
    render(
      <BrowserRouter>
        <Navbar orders={fakedOrders} />
      </BrowserRouter>
    );
    const cart = screen.getByRole('menuitem', { name: /carticon/i });
    expect(cart).toMatchSnapshot();
  });
  it('should go to checkout page if user clicks on cart icon', () => {
    const fakedOrders = [
      {
        quantity: 1
      },
      {
        quantity: 3
      }
    ];
    render(
      <BrowserRouter>
        <Navbar orders={fakedOrders} />
      </BrowserRouter>
    );
    const cart = screen.getByRole('menuitem', { name: /carticon/i });
    userEvent.click(cart);
    expect(window.location.pathname).toMatch(/\/checkout/i);
  });
  it('should render total number of orders', () => {
    const fakedOrders = [
      {
        quantity: 1
      },
      {
        quantity: 3
      }
    ];
    render(
      <BrowserRouter>
        <Navbar orders={fakedOrders} />
      </BrowserRouter>
    );
    const ordersQuantity = screen.getByRole('menuitem', {
      name: /ordersQuantity/i
    });
    expect(ordersQuantity.textContent).toMatch(/4/i);
  });
});
