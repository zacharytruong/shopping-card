import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Shop from './Shop';

describe('Shop component', () => {
  it('should render Shop All Cruise heading', () => {
    render(
      <BrowserRouter>
        <Shop />
      </BrowserRouter>
    );
    const heading = screen.getByRole('heading', { name: /shop all cruises/i });
    expect(heading.textContent).toMatch(/shop all cruises/i);
  });
  it('should render list items equal to the length of products array by default', () => {
    const fakedProducts = [
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
    render(
      <BrowserRouter>
        <Shop products={fakedProducts} />
      </BrowserRouter>
    );
    const list = screen.getByRole('list', { name: /productsList/i });
    const listitems = within(list).getAllByRole('listitem');
    const heading = screen.getByRole('heading', { name: /shop all cruises/i });
    expect(listitems.length).toBe(3);
    userEvent.click(heading);
    expect(listitems.length).toBe(3);
  });
  it('should render list items equal to the length of products array when user clicks Shop All Cruise', () => {
    const fakedProducts = [
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
    render(
      <BrowserRouter>
        <Shop products={fakedProducts} />
      </BrowserRouter>
    );
    const list = screen.getByRole('list', { name: /productsList/i });
    const listitems = within(list).getAllByRole('listitem');
    const heading = screen.getByRole('heading', { name: /shop all cruises/i });
    userEvent.click(heading);
    expect(listitems.length).toBe(3);
  });
});
describe('SearchByShips child component', () => {
  it('should render each ship once', () => {
    const fakedProducts = [
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
        <Shop products={fakedProducts} />
      </BrowserRouter>
    );
    const list = screen.getByRole('list', { name: /searchByShips/i });
    const listitems = within(list).getAllByRole('listitem');
    expect(listitems.length).toBe(3);
  });
  it('should render correct number of ships when clicked on ship name', () => {
    const fakedProducts = [
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
        <Shop products={fakedProducts} />
      </BrowserRouter>
    );
    const list = screen.getByRole('list', { name: /searchByShips/i });
    const listitems = within(list).getAllByRole('listitem');
    userEvent.click(listitems[0]);
    const productsList = screen.getByRole('list', { name: /productsList/i });
    const productItems = within(productsList).getAllByRole('listitem');
    expect(productItems.length).toBe(2);
  });
  it('should render correct number of ships when clicked on ship name (2nd check)', async () => {
    const fakedProducts = [
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
        <Shop products={fakedProducts} />
      </BrowserRouter>
    );
    const list = screen.getByRole('list', { name: /searchByShips/i });
    const listitems = within(list).getAllByRole('listitem');
    userEvent.click(listitems[1]);
    const productsList = screen.getByRole('list', { name: /productsList/i });
    const productItems = within(productsList).getAllByRole('listitem');
    expect(productItems.length).toBe(1);
  });
});
