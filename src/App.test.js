import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  describe('it should render Navbar', () => {
    test('should render logo', () => {
      render(<App />);
      const logo = screen.getByRole('img', { name: /ultimat world cruise/i });
      expect(logo).toBeInTheDocument();
    });
    test('should render shop', () => {
      render(<App />);
      const shop = screen.getByRole('heading', { name: /shop/i });
      expect(shop).toBeInTheDocument();
    });
    test('should render cart icon', () => {
      render(<App />);
      const cart = screen.getByRole('heading', { name: /shop/i });
      expect(cart).toBeInTheDocument();
    });
    test('should render total orders number', () => {
      render(<App />);
      const totalOrders = screen.getByRole('menuitem', {
        name: /ordersquantity/i
      });
      expect(totalOrders).toBeInTheDocument();
    });
  });
});