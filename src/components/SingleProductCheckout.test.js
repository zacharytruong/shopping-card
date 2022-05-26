import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import SingleProductCheckOut from './SingleProductCheckout';

describe('single order detail', () => {
  it('onchange capture correct quantity', () => {
    const fakedOrder = {
      ship: 'WONDER OF THE SEAS',
      destination: 'Bahamas',
      duration: 3,
      price: 490,
      image: 'wonderOfTheSeas',
      quantity: 3
    };
    render(
      <BrowserRouter>
        <SingleProductCheckOut order={fakedOrder} />
      </BrowserRouter>
    );
    const input = screen.getByRole('spinbutton', { name: /quantity:/i });
    userEvent.type(input, '5');
    expect(input.value).toMatch(/5/i);
  });
  it('should update the order quantity correctly when user clicks update order button', () => {
    const fakedOrder = {
      ship: 'WONDER OF THE SEAS',
      destination: 'Bahamas',
      duration: 3,
      price: 490,
      image: 'wonderOfTheSeas',
      quantity: 3
    };
    function fakedUpdateOrder() {
      fakedOrder.quantity = input.value;
    }
    render(
      <BrowserRouter>
        <SingleProductCheckOut
          order={fakedOrder}
          updateSingleOrder={fakedUpdateOrder}
        />
      </BrowserRouter>
    );
    const button = screen.getByRole('button', { name: /update quantity/i });
    const input = screen.getByRole('spinbutton', { name: /quantity:/i });
    userEvent.type(input, '5');
    button.onclick = fakedUpdateOrder;
    userEvent.click(button);
    expect(fakedOrder.quantity).toMatch(/5/i);
  });
  it('should remove the order from the orders array when user clicks remove order button', () => {
    const fakedOrder = {
      ship: 'WONDER OF THE SEAS',
      destination: 'Bahamas',
      duration: 3,
      price: 490,
      image: 'wonderOfTheSeas',
      quantity: 3
    };
    const fakedOrders = [fakedOrder];
    const fakedRemoveOrder = () => fakedOrders.splice(0, 1)
    render(
      <BrowserRouter>
        <SingleProductCheckOut
          order={fakedOrder}
          index={0}
          removeProduct={fakedRemoveOrder}
        />
      </BrowserRouter>
    );
    const button = screen.getByRole('button', { name: /remove/i });
    button.onclick = fakedRemoveOrder();
    userEvent.click(button);
    expect(fakedOrders.length).toBe(0)
  });
  it('should calculate subtotal correctly', () => {
    const fakedOrder = {
      price: 5,
      quantity: 3
    };
    render(
      <BrowserRouter>
        <SingleProductCheckOut order={fakedOrder} />
      </BrowserRouter>
    );
    const subTotal = screen.getByRole('note', {  name: /subtotal/i});
    expect(subTotal.textContent).toMatch(/15/i);
  });
});
