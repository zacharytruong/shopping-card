import {
  Button,
  Card,
  Col,
  Container,
  Grid,
  Input,
  Loading,
  Row,
  Text
} from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import { Products } from '../data/Products';

function SearchByShips({ changeShipFilter }) {
  const ships = [];
  Products.map((product) =>
    ships.includes(product.ship) ? null : ships.push(product.ship)
  );
  const handleOnClick = (e) => changeShipFilter(e.target.textContent);
  return (
    <Container>
      <Row>
        <Text h3 css={{ paddingTop: 10, paddingBottom: 10 }}>
          Search By Ships
        </Text>
      </Row>
      {ships.map((ship) => (
        <Text
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

function ProductCard({ product, addToOrder }) {
  const [orderQuantity, setOrderQUantity] = useState(1);
  const handleAddOrder = (e) => addToOrder(e.target, orderQuantity);
  const handleOnChange = (e) => setOrderQUantity(e.target.value);
  return (
    <div className="singleProduct">
      <Card cover css={{ w: '100%' }}>
        <Card.Header
          css={{
            position: 'absolute',
            zIndex: 1,
            top: 0,
            bgBlur: '#000000',
            borderTop: '$borderWeights$light solid rgba(0, 0, 0, 0.2)'
          }}
        >
          <Col>
            <Text
              size={12}
              weight="bold"
              transform="uppercase"
              color="#ffffffAA"
            >
              {product.duration + ' Nights'}
            </Text>
            <Text h3 color="ffffffAA">
              {product.destination}
            </Text>
          </Col>
        </Card.Header>
        <Card.Body>
          <Card.Image
            src={product.image}
            height={400}
            width="100%"
            alt={product.ship}
          />
        </Card.Body>
        <Card.Footer
          blur
          css={{
            position: 'absolute',
            bgBlur: '#000000',
            borderTop: '$borderWeights$light solid rgba(0, 0, 0, 0.2)',
            bottom: 0,
            zIndex: 1
          }}
        >
          <Row>
            <Col>
              <Text color="#FFF" size={12}>
                {product.ship}
              </Text>
            </Col>
            <Col>
              <Text color="#FFF" size={12}>
                ${product.price}/person
              </Text>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
      <Row
        display="flex"
        css={{
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingTop: 40
        }}
      >
        <Input
          clearable
          underlined
          color="secondary"
          labelPlaceholder="Quantity:"
          type="number"
          placeholder={1}
          min={1}
          onChange={handleOnChange}
        />
        <Button color="gradient" bordered ghost onClick={handleAddOrder}>
          <Text
            css={{ color: 'inherit' }}
            size={12}
            weight="bold"
            transform="uppercase"
          >
            Add to Cart
          </Text>
        </Button>
      </Row>
    </div>
  );
}

function Shop({ orders, setOrders }) {
  const [shipFilter, setShipFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const changeShipFilter = (value) => setShipFilter(value);
  const addToOrder = (element, quantity) => {
    const container = element.closest('.productsList');
    const target = element.closest('.singleProduct').parentNode;
    // console.log(target);
    const targetIndex = Array.from(container.children).indexOf(target);
    if (shipFilter === '') {
      const order = { ...Products[targetIndex] };
      order.quantity = quantity;
      setOrders(orders.concat(order));
    } else {
      const filteredShips = Products.filter(
        (product) => product.ship === shipFilter
      );
      const order = { ...filteredShips[targetIndex] };
      order.quantity = quantity;
      setOrders(orders.concat(filteredShips[targetIndex]));
    }
  };
  useEffect(() => setLoading(false), [orders]);
  return (
    <Container display="flex" css={{ paddingTop: 50 }}>
      <Row gap={1}>
        <Col span={3}>
          <Text h2 size={30} onClick={() => setShipFilter('')}>
            Shop All Cruises
          </Text>
          <SearchByShips changeShipFilter={changeShipFilter} />
        </Col>
        <Col>
          <Grid.Container className="productsList" gap={2}>
            {loading ? (
              <Loading />
            ) : (
              Products.map((product) =>
                product.ship === shipFilter || shipFilter === '' ? (
                  <Grid lg={4} sm={6} key={uniqid()}>
                    <ProductCard product={product} addToOrder={addToOrder} />
                  </Grid>
                ) : null
              )
            )}
          </Grid.Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Shop;
