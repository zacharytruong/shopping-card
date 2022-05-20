import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Input,
  Loading,
  Row,
  Text
} from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import uniqid from 'uniqid';

function SingleProduct({ order, index, updateSingleOrder, removeProduct }) {
  const [quantity, setOrderQUantity] = useState(order.quantity);
  const handleOnChange = (e) => setOrderQUantity(e.target.value);
  const updateSingleOrderQuantity = () => updateSingleOrder(index, quantity);
  const removeSingleProduct = () => removeProduct(index);

  return (
    <Row
      className="singleOrder"
      css={{ paddingTop: 40, paddingBottom: 40 }}
      gap={1}
    >
      <Col span={12}>
        <Image showSkeleton src={order.image} />
      </Col>
      <Col>
        <Text>{order.ship}</Text>
        <Text>{order.duration} Nights</Text>
        <Text>Price: ${order.price} /night</Text>
        <Text>Subtotal: ${order.price * order.quantity}</Text>
      </Col>
      <Col>
        <Input
          clearable
          underlined
          color="secondary"
          labelPlaceholder="Quantity:"
          type="number"
          value={quantity}
          min={1}
          onChange={handleOnChange}
        />
        <Button
          color="gradient"
          bordered
          ghost
          onClick={updateSingleOrderQuantity}
          css={{ marginTop: 10, marginBottom: 10 }}
        >
          Update Quantity
        </Button>
        <Button
          color="gradient"
          bordered
          ghost
          onClick={removeSingleProduct}
          css={{ marginTop: 10, marginBottom: 10 }}
        >
          Remove
        </Button>
      </Col>
    </Row>
  );
}
function CheckOut({ orders, updateSingleOrder, removeProduct }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => setLoading(false), []);
  useEffect(() => {
    const tempOrders = orders.map((order) => order.price * order.quantity);
    const total = tempOrders.reduce((a, b) => a + b, 0);
    setTotalPrice(total);
  }, [orders]);
  return (
    <Container css={{ paddingTop: 40 }}>
      {loading ? (
        <Loading />
      ) : orders.length < 1 ? (
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
          <Text>Your cart is empty.</Text>
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
          <SingleProduct
            key={uniqid()}
            order={order}
            index={index}
            updateSingleOrder={updateSingleOrder}
            removeProduct={removeProduct}
          />
        ))
      )}
      <Card css={{ marginTop: 20, marginBottom: 20 }}>
        <Text size={30} css={{ paddingLeft: 10 }}>
          Total: ${totalPrice}
        </Text>
      </Card>
    </Container>
  );
}

export default CheckOut;
