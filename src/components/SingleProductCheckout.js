import { Button, Col, Image, Input, Row, Text } from '@nextui-org/react';
import React, { useState } from 'react';

function SingleProductCheckOut({
  order,
  index,
  updateOrderFromCheckOut,
  removeOrderFromCheckOut
}) {
  const [quantity, setOrderQUantity] = useState(order.quantity);
  const handleOnChange = (e) => setOrderQUantity(e.target.value);
  const updateOrderFromCheckOutQuantity = () =>
    updateOrderFromCheckOut(index, quantity);
  const removeSingleProduct = () => removeOrderFromCheckOut(index);

  return (
    <li className="singleOrder">
      <Row css={{ paddingTop: 40, paddingBottom: 40 }} gap={1}>
        <Col span={12}>
          <Image showSkeleton src={order.image} />
        </Col>
        <Col>
          <Text>{order.destination}</Text>
          <Text>{order.ship}</Text>
          <Text>{order.duration} Nights</Text>
          <Text>Price: ${order.price} /night</Text>
          <Text>
            Subtotal: $
            <span role="note" aria-label="subTotal">
              {order.price * order.quantity}
            </span>
          </Text>
        </Col>
        <Col>
          <Input
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
            onClick={updateOrderFromCheckOutQuantity}
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
    </li>
  );
}

export default SingleProductCheckOut;
