import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

describe('Home component test', () => {
  test('it should render H1 heading', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const ele = screen.getByRole('heading');
    expect(ele.textContent).toMatch(/ULTIMATE WORLD CRUISE/i);
  });
  test('it should render button', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const ele = screen.getByRole('button', {
      name: /browse/i
    });
    expect(ele).toBeInTheDocument();
  });
  test('button click will navigate to shop page', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const ele = screen.getByRole('button', {
      name: /browse/i
    });
    userEvent.click(ele);
    expect(window.location.pathname).toBe('/shop');
  });
});
