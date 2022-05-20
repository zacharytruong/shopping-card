import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Shop from './Shop';

describe('Shop component', () => {
  test('it should render shop all cruises', () => {
    render(
      <BrowserRouter>
        <Shop />
      </BrowserRouter>
    );
    const ele = screen.getByRole('heading', {
      name: /shop all cruises/i
    });
    expect(ele.textContent).toMatch(/shop all cruises/i);
  });
  test('it should render search by ships', () => {
    render(
      <BrowserRouter>
        <Shop />
      </BrowserRouter>
    );
    const ele = screen.getByRole('heading', {
      name: /search by ships/i
    });
    expect(ele.textContent).toMatch(/search by ships/i);
  });
  test('it should render search by destinations', () => {
    render(
      <BrowserRouter>
        <Shop />
      </BrowserRouter>
    );
    const ele = screen.getByRole('heading', {
      name: /search by destinations/i
    });
    expect(ele.textContent).toMatch(/search by destinations/i);
  });
});
