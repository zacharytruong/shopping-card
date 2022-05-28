import { Col, Container, Grid, Row, Text } from '@nextui-org/react';
import { gsap } from 'gsap';
import React from 'react';
import uniqid from 'uniqid';
import ProductCard from './ProductCard';
import SearchByShips from './SearchByShips';

function Shop({
  shipFilter,
  setShipFilter,
  products,
  addToOrderFromShopPage
}) {
  const changeShipFilter = (value) => setShipFilter(value);
  const onClickShopAllCruise = () => setShipFilter('');
  const onEnterShopAllCruise = ({ currentTarget }) =>
    gsap.to(currentTarget, { scale: 1.2 });
  const onLeaveShopAllCruise = ({ currentTarget }) =>
    gsap.to(currentTarget, { scale: 1 });

  return (
    <Container display="flex" css={{ paddingTop: 50 }}>
      <Row gap={1}>
        <Col span={3}>
          <Text
            h2
            size={30}
            onClick={onClickShopAllCruise}
            css={
              shipFilter === ''
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
            onMouseEnter={onEnterShopAllCruise}
            onMouseLeave={onLeaveShopAllCruise}
          >
            Shop All Cruises
          </Text>
          <SearchByShips
            products={products}
            shipFilter={shipFilter}
            changeShipFilter={changeShipFilter}
          />
        </Col>
        <Col>
          <Grid.Container
            className="productsList"
            gap={2}
            role="list"
            aria-label="productsList"
            css={{ listStyle: 'none' }}
          >
            {products.map((product) =>
              product.ship === shipFilter || shipFilter === '' ? (
                <Grid lg={4} sm={6} key={uniqid()}>
                  <ProductCard
                    product={product}
                    addToOrderFromShopPage={addToOrderFromShopPage}
                  />
                </Grid>
              ) : null
            )}
          </Grid.Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Shop;
