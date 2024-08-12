import "./App.css";
import Header from "./Components/header";
import Orders from "./Components/orders";

import Products from "./Components/products";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const productList = [
    {
      productName: "Micromax PHONE",
      price: 5000,
    },
    {
      productName: "Apple Iphone",
      price: 500000,
    },
    {
      productName: "LAPTOP ASUS",
      price: 70000,
    },
    {
      productName: "LAPTOP ASUS",
      price: 60000,
    },
    {
      productName: "MI PHONE 5054",
      price: 60000,
    },
    {
      productName: "LAPTOP BAG",
      price: 60000,
    },
    {
      productName: "WATER BOTTLE",
      price: 60,
    },
    {
      productName: "BIKE RONIN",
      price: 200000,
    },
    {
      productName: "MARUTI CIAZ",
      price: 1000000,
    },
  ];

  const myOrders = [ {
    productName: "Micromax PHONE",
    price: 5000,
    dateOfOrderPlaced : '07-08-2024',
    dateOfDelivery  : '12-08-2024'
  }];
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Products productList={productList} myOrders={myOrders} />
              </>
            }
          />
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders myOrders={myOrders} />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Header />
                <h1> My cart will come here </h1>
              </>
            }
          />
          <Route path="*" element={<b> OOPS ! This Page doesnt exists</b>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
