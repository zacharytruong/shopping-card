import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import ProductCard from './ProductCard';

describe('Product Card component', () => {
  it('onchange capture corrects quantity', () => {
    const fakedOnChange = jest.fn();
    const fakedProduct = {
      ship: 'WONDER OF THE SEAS',
      destination: 'Bahamas',
      duration: 3,
      price: 490,
      image: 'fakedImageSrc'
    };
    render(
      <BrowserRouter>
        <ProductCard product={fakedProduct} />
      </BrowserRouter>
    );
    const input = screen.getByRole('spinbutton', { name: /quantity/i });
    input.onchange = fakedOnChange();
    userEvent.type(input, '5123');
    expect(input.value).toBe('5123');
  });
  it('submit correct quantity to the orders', () => {
    const fakedOrders = [];
    let fakedQuantity = 1;
    const fakedProduct = {
      ship: 'WONDER OF THE SEAS',
      destination: 'Bahamas',
      duration: 3,
      price: 490,
      image: 'fakedImageSrc'
    };
    const fakedAddToOrder = () => {
      fakedProduct.quantity = fakedQuantity;
      fakedOrders.push(fakedProduct);
    };
    render(
      <BrowserRouter>
        <ProductCard product={fakedProduct} submitOrder={fakedAddToOrder} />
      </BrowserRouter>
    );
    const input = screen.getByRole('spinbutton', { name: /quantity/i });
    const button = screen.getByRole('button', { name: /add to cart/i });
    userEvent.type(input, '5');
    fakedQuantity = input.value;
    userEvent.click(button);
    expect(parseInt(fakedOrders[0].quantity)).toBe(5);
  });
});
