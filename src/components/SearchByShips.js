import { Container, Row, Text } from '@nextui-org/react';
import { gsap } from 'gsap';
import React, { useEffect, useState } from 'react';

function SearchByShips({ shipFilter, changeShipFilter, products }) {
  const [ships, setShips] = useState([]);
  const handleOnClick = ({ currentTarget }) => {
    changeShipFilter(currentTarget.textContent);
  };
  const onEnterShipFilter = ({ currentTarget }) =>
    gsap.to(currentTarget, { scale: 1.2 });
  const onLeaveShipFilter = ({ currentTarget }) =>
    gsap.to(currentTarget, { scale: 1 });
  useEffect(() => {
    products.map((product) =>
      ships.includes(product.ship) ? null : setShips(ships.concat(product.ship))
    );
  }, [products, ships]);
  return (
    <Container>
      <Row>
        <Text h3 css={{ paddingTop: 10, paddingBottom: 10 }}>
          Search By Ships
        </Text>
      </Row>
      <ul aria-label="searchByShips" style={{ margin: 0, padding: 0 }}>
        {ships.map((ship) => (
          <Text
            role="listitem"
            aria-label={ship.ship}
            key={ship}
            onClick={handleOnClick}
            css={
              shipFilter === ship
                ? {
                    paddingTop: 5,
                    paddingBottom: 5,
                    '&:hover': { cursor: 'pointer', color: '$primary' },
                    textDecoration: 'underline',
                    color: '#ff9b54'
                  }
                : {
                    paddingTop: 5,
                    paddingBottom: 5,
                    '&:hover': { cursor: 'pointer', color: '$primary' }
                  }
            }
            className={shipFilter === ship ? 'activeFilter' : null}
            onMouseEnter={onEnterShipFilter}
            onMouseLeave={onLeaveShipFilter}
          >
            {ship}
          </Text>
        ))}
      </ul>
    </Container>
  );
}

export default SearchByShips;
