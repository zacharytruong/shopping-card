import { Button, Card, Col, Input, Row, Text } from '@nextui-org/react';
import React, { useState } from 'react';

function ProductCard({ product, addToOrder }) {
  const [orderQuantity, setOrderQUantity] = useState(1);
  const handleAddOrder = (e) => addToOrder(e.target, orderQuantity);
  const handleOnChange = (e) => setOrderQUantity(parseInt(e.target.value));
  return (
    <li className="singleProduct">
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
    </li>
  );
}

export default ProductCard;
