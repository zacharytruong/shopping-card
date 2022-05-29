import { Button, Card, Col, Input, Row, Spacer, Text } from '@nextui-org/react';
import { gsap } from 'gsap';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail({ products, addToOrderFromProductDetail }) {
  const [orderQuantity, setOrderQUantity] = useState(1);
  const params = useParams();
  const product = products.find(
    (product) => parseInt(product.id) === parseInt(params.id)
  );
  const handleAddOrder = () => {
    const order = { ...product };
    order.quantity = orderQuantity;
    addToOrderFromProductDetail(order);
  };

  const handleOnChange = (e) => setOrderQUantity(parseInt(e.target.value));

  const onEnterAnima = ({ currentTarget }) =>
    gsap.to(currentTarget, { scale: 1.2 });
  const onLeaveAnima = ({ currentTarget }) =>
    gsap.to(currentTarget, { scale: 1 });
  return (
    <div style={{ maxWidth: 700, margin: '100px auto' }}>
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
            onMouseEnter={onEnterAnima}
            onMouseLeave={onLeaveAnima}
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
          underlined
          color="secondary"
          labelPlaceholder="Quantity"
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
      <Spacer y={3} />
      <Row>
        <Text h3>Description:</Text>
      </Row>
      <Row>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Row>
    </div>
  );
}

export default ProductDetail;
