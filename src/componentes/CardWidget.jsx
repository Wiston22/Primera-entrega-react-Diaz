import React from "react";
import { Card } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

const CartWidget = () => {
  const itemCount = 0;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <i className="bi bi-cart-fill"></i>
        <span>{itemCount}</span>
      </Card.Body>
    </Card>
  );
};

export default CartWidget;
