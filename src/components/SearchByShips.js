import { Container, Row, Text } from '@nextui-org/react';
import React from 'react';
import uniqid from 'uniqid';

function SearchByShips({ changeShipFilter, products }) {
  const ships = [];
  products.map((product) =>
    ships.includes(product.ship) ? null : ships.push(product.ship)
  );
  const handleOnClick = (e) => changeShipFilter(e.target.textContent);
  return (
    <Container role="list" aria-label="searchByShips">
      <Row>
        <Text h3 css={{ paddingTop: 10, paddingBottom: 10 }}>
          Search By Ships
        </Text>
      </Row>
      {ships.map((ship) => (
        <Text
          role="listitem"
          aria-label={ship.ship}
          key={uniqid()}
          onClick={handleOnClick}
          css={{ paddingTop: 5, paddingBottom: 5 }}
        >
          {ship}
        </Text>
      ))}
    </Container>
  );
}

export default SearchByShips;
