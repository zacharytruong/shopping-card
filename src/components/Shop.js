import { Col, Container, Grid, Row, Text } from '@nextui-org/react';
import React, { useState } from 'react';
import uniqid from 'uniqid';
import { Products } from '../data/Products';
import ProductCard from './ProductCard';
import SearchByShips from './SearchByShips';

function Shop({ orders, setOrders, products = Products }) {
  const [shipFilter, setShipFilter] = useState('');
  const changeShipFilter = (value) => setShipFilter(value);
  const addToOrder = (element, quantity) => {
    const container = element.closest('.productsList');
    const target = element.closest('.singleProduct').parentNode;
    const targetIndex = Array.from(container.children).indexOf(target);
    if (shipFilter === '') {
      const order = { ...products[targetIndex] };
      order.quantity = parseInt(quantity);
      setOrders(orders.concat(order));
    } else {
      const filteredShips = products.filter(
        (product) => product.ship === shipFilter
      );
      const order = { ...filteredShips[targetIndex] };
      order.quantity = quantity;
      setOrders(orders.concat(order));
    }
  };
  return (
    <Container display="flex" css={{ paddingTop: 50 }}>
      <Row gap={1}>
        <Col span={3}>
          <Text h2 size={30} onClick={() => setShipFilter('')}>
            Shop All Cruises
          </Text>
          <SearchByShips
            changeShipFilter={changeShipFilter}
            products={products}
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
                  <ProductCard product={product} addToOrder={addToOrder} />
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
