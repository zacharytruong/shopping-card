import { NextUIProvider } from '@nextui-org/react';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CheckOut from './components/CheckOut';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import darkTheme from './components/Theme';

function App() {
  const [orders, setOrders] = useState([]);
  const updateSingleOrder = (orderIndex, orderQuantity) => {
    const newOrders = [...orders];
    newOrders[orderIndex].quantity = orderQuantity;
    setOrders(newOrders);
  };
  const removeProduct = (orderIndex) => {
    const newOrders = [...orders];
    newOrders.splice(orderIndex, 1);
    setOrders(newOrders);
  };
  return (
    <BrowserRouter>
      <NextUIProvider theme={darkTheme}>
        <Navbar orders={orders} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={<Shop orders={orders} setOrders={setOrders} />}
          />
          <Route
            path="/checkout"
            element={
              <CheckOut
                orders={orders}
                updateSingleOrder={updateSingleOrder}
                removeProduct={removeProduct}
              />
            }
          />
        </Routes>
      </NextUIProvider>
    </BrowserRouter>
  );
}

export default App;
