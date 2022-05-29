import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import SearchByShips from './SearchByShips';

describe('SearchByShips child component', () => {
  test('should render each ship once', () => {
    const mockProducts = [
      {
        ship: 'WONDER OF THE SEAS'
      },
      {
        ship: 'HARMONY OF THE SEAS'
      },
      {
        ship: 'MARINER OF THE SEAS'
      },
      {
        ship: 'WONDER OF THE SEAS'
      }
    ];
    render(
      <BrowserRouter>
        <SearchByShips products={mockProducts} />
      </BrowserRouter>
    );
    const list = screen.getByRole('list', { name: /searchByShips/i });
    const listitems = within(list).getAllByRole('listitem');
    expect(listitems.length).toBe(3);
  });
  test('should set shipFilter to correct ship name when user clicks on ship name', () => {
    const mockProducts = [
      {
        ship: 'WONDER OF THE SEAS'
      },
      {
        ship: 'HARMONY OF THE SEAS'
      },
      {
        ship: 'MARINER OF THE SEAS'
      },
      {
        ship: 'WONDER OF THE SEAS'
      }
    ];
    let mockShipFilter = '';
    const mockChangeShipFilter = () => (mockShipFilter = 'WONDER OF THE SEAS');
    render(
      <BrowserRouter>
        <SearchByShips
          products={mockProducts}
          shipFilter={mockShipFilter}
          changeShipFilter={mockChangeShipFilter}
        />
      </BrowserRouter>
    );
    const list = screen.getByRole('list', { name: /searchByShips/i });
    const listitems = within(list).getAllByRole('listitem');
    userEvent.click(listitems[1]);
    expect(mockShipFilter).toMatch(/WONDER OF THE SEAS/i)
  });
});
