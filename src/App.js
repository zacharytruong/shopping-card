import { NextUIProvider } from '@nextui-org/react';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CheckOut from './components/CheckOut';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProductDetail from './components/ProductDetail';
import Shop from './components/Shop';
import darkTheme from './components/Theme';

function App() {
  const [orders, setOrders] = useState([]);
  const [shipFilter, setShipFilter] = useState('');
  const [products, setProducts] = useState([]);

  const addToOrderFromShopPage = (element, quantity) => {
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

  const updateOrderFromCheckOut = (orderIndex, orderQuantity) => {
    const newOrders = [...orders];
    newOrders[orderIndex].quantity = parseInt(orderQuantity);
    setOrders(newOrders);
  };

  const removeOrderFromCheckOut = (orderIndex) => {
    const newOrders = [...orders];
    newOrders.splice(orderIndex, 1);
    setOrders(newOrders);
  };
  const addToOrderFromProductDetail = (order) =>
    setOrders(orders.concat(order));

  return (
    <BrowserRouter>
      <NextUIProvider theme={darkTheme}>
        <Navbar orders={orders} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={
              <Shop
                orders={orders}
                setOrders={setOrders}
                shipFilter={shipFilter}
                setShipFilter={setShipFilter}
                products={products}
                setProducts={setProducts}
                addToOrderFromShopPage={addToOrderFromShopPage}
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <CheckOut
                orders={orders}
                updateOrderFromCheckOut={updateOrderFromCheckOut}
                removeOrderFromCheckOut={removeOrderFromCheckOut}
              />
            }
          />
          <Route
            path="/shop/:id"
            element={
              <ProductDetail
                products={products}
                addToOrderFromProductDetail={addToOrderFromProductDetail}
              />
            }
          />
        </Routes>
      </NextUIProvider>
    </BrowserRouter>
  );
}

export default App;
