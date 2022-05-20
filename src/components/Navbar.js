import { Col, Container, Image, Text } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import cruiseLogo from './../media/cruiseLogo.png';

function Navbar({ orders }) {
  const [totalItems, setTotalItems] = useState(0);
  useEffect(() => {
    const tempOrders = orders.map((order) => order.quantity);
    const total = tempOrders.reduce((a, b) => parseInt(a) + parseInt(b), 0);
    setTotalItems(total);
  }, [orders]);
  return (
    <Container display="flex" wrap="wrap" css={{ h: 100 }}>
      <Col span={3}>
        <NavLink to="/">
          <Image
            width={200}
            height={100}
            src={cruiseLogo}
            alt="Ultimat World Cruise"
          />
        </NavLink>
      </Col>
      <Col
        span={8}
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end'
        }}
      >
        <NavLink to="/shop">
          <Text h2>Shop</Text>
        </NavLink>
        <NavLink to="/checkout" style={{ display: 'flex', paddingLeft: 20 }}>
          <i
            className="fa-solid fa-cart-flatbed"
            style={{ fontSize: 35, color: '#FFFFFF' }}
          ></i>
          <Text size={35} css={{ paddingLeft: 10 }}>
            {totalItems}
          </Text>
        </NavLink>
      </Col>
    </Container>
  );
}

export default Navbar;
