import { Button, Card, Container, Text } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SingleProductCheckOut from './SingleProductCheckout';

function CheckOut({
  orders,
  updateOrderFromCheckOut,
  removeOrderFromCheckOut
}) {
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const total = orders.reduce(
      (prev, cur) =>
        parseInt(cur.price) * parseInt(cur.quantity) + parseInt(prev),
      0
    );
    setTotalPrice(total);
  }, [orders]);
  return (
    <Container css={{ paddingTop: 40 }}>
      <ul aria-label="allOrdersList">
        {orders.length < 1 ? (
          <Card
            className="placeHolder"
            css={{
              marginTop: 20,
              marginBottom: 20,
              maxWidth: '50%',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            <Text role="alert">Your cart is empty.</Text>
            <Button
              color="gradient"
              bordered
              ghost
              onClick={() => navigate('/shop')}
            >
              Shop Your Cruises
            </Button>
          </Card>
        ) : (
          orders.map((order, index) => (
            <SingleProductCheckOut
              key={order.id}
              order={order}
              index={index}
              updateOrderFromCheckOut={updateOrderFromCheckOut}
              removeOrderFromCheckOut={removeOrderFromCheckOut}
            />
          ))
        )}
      </ul>
      <Card css={{ marginTop: 20, marginBottom: 20 }}>
        <Text size={30} css={{ paddingLeft: 10, display: 'inline-block' }}>
          Total: {' $'}
          <span role="note" aria-label="totalPrice">
            {totalPrice}
          </span>
        </Text>
      </Card>
    </Container>
  );
}

export default CheckOut;
