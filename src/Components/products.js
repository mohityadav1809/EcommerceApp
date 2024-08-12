import React, { useState, useEffect } from "react";
import { Table, Modal, Button, Form, FormControl } from "react-bootstrap";

export default function Products({ productList, myOrders }) {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [messageToShow, setMessageToShow] = useState({});
  const [myorders, setMyorders] = useState([]);

  useEffect(() => {
    setProducts(productList);
  }, [productList]);

  const handleClose = () => setShow(false);

  const buyNow = (productDetails) => {
    console.log("buy Now function called", productDetails);
    setMyorders(productDetails);
    setMessageToShow({
      title: "Order Placed",
      message: ` Yohooo! Your order for ${productDetails.productName} is succesfully placed`,
    });
    setShow(true);
  };

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
      productList.filter((ele) => ele.productName.includes(query.trim()))
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
            <th>Order item</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((t) => (
            <tr>
              <td>{t.productName}</td>
              <td>{t.price}</td>
              <td>
                <Button
                  variant="success"
                  id="button-addon2"
                  onClick={() => buyNow(t)}
                >
                  Buy Now
                </Button>
              </td>
            </tr>
          ))}

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{messageToShow.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{messageToShow.message}</Modal.Body>
            <Modal.Footer>
              <Button variant="success" onClick={handleClose}>
                Okay
              </Button>
            </Modal.Footer>
          </Modal>
        </tbody>
      </Table>
    </>
  );
}
