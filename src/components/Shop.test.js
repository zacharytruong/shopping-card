import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Shop from './Shop';

describe('Shop component', () => {
  test('should render Shop All Cruise heading', () => {
    const mockProducts = [
      {
        ship: 'WONDER OF THE SEAS'
      },
      {
        ship: 'HARMONY OF THE SEAS'
      },
      {
        ship: 'MARINER OF THE SEAS'
      }
    ];
    const mockSetProducts = () => jest.fn().mockReturnValue(mockProducts);
    render(
      <BrowserRouter>
        <Shop
          products={mockProducts}
          setProducts={mockSetProducts}
          shipFilter=""
        />
      </BrowserRouter>
    );
    const heading = screen.getByRole('heading', { name: /shop all cruises/i });
    expect(heading).toBeInTheDocument();
  });
  test('should render list items equal to the length of products array by default', () => {
    const mockProducts = [
      {
        ship: 'WONDER OF THE SEAS'
      },
      {
        ship: 'HARMONY OF THE SEAS'
      },
      {
        ship: 'MARINER OF THE SEAS'
      }
    ];
    const mockSetProducts = () => jest.fn().mockReturnValue(mockProducts);
    const mockSetShipFilter = () => jest.fn().mockReturnValue('');
    render(
      <BrowserRouter>
        <Shop
          products={mockProducts}
          setProducts={mockSetProducts}
          shipFilter=""
          setShipFilter={mockSetShipFilter}
        />
      </BrowserRouter>
    );
    const list = screen.getByRole('list', { name: /productsList/i });
    const listitems = within(list).getAllByRole('listitem');
    expect(listitems.length).toBe(3);
  });
  test('should render list items equal to the length of products array when user clicks Shop All Cruise', () => {
    const mockProducts = [
      {
        ship: 'WONDER OF THE SEAS'
      },
      {
        ship: 'HARMONY OF THE SEAS'
      },
      {
        ship: 'MARINER OF THE SEAS'
      }
    ];
    const mockSetProducts = () => jest.fn().mockReturnValue(mockProducts);
    const mockSetShipFilter = () => jest.fn().mockReturnValue('');
    render(
      <BrowserRouter>
        <Shop
          products={mockProducts}
          setProducts={mockSetProducts}
          shipFilter=""
          setShipFilter={mockSetShipFilter}
        />
      </BrowserRouter>
    );
    const list = screen.getByRole('list', { name: /productsList/i });
    const listitems = within(list).getAllByRole('listitem');
    const heading = screen.getByRole('heading', { name: /shop all cruises/i });
    userEvent.click(heading);
    expect(listitems.length).toBe(3);
  });
});
