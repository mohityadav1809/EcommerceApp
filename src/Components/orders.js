import React, { useState, useEffect } from "react";
import { Table, Button, Form, FormControl } from "react-bootstrap";

export default function Orders({ myOrders }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(myOrders);
  }, [myOrders]);

  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    console.log("handleInputChangeCalled");
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setProducts(
      myOrders.filter((ele) => ele.productName.includes(query.trim()))
    );
  };

  return (
    <>
      <Form onSubmit={handleSearch}>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={query}
          onChange={handleInputChange}
        />
        <Button variant="outline-success" type="submit">
          Search
        </Button>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Date of order Placed</th>
            <th>Date of Delivery</th>
          </tr>
        </thead>
        <tbody>
          {products.map((t) => (
            <tr>
              <td>{t.productName}</td>
              <td>{t.price}</td>
              <td>{t.dateOfOrderPlaced}</td>
              <td>{t.dateOfDelivery}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
