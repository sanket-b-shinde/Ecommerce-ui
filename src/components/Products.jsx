import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

function Products() {
  const products = [
    { id: 1, name: "Smartphone", price: "₹15,000", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
    { id: 2, name: "Headphones", price: "₹2,500", img: "https://www.leafstudios.in/cdn/shop/files/1_a43c5e0b-3a47-497d-acec-b4764259b10e_1024x1024.png?v=1750486829" },
    { id: 3, name: "Shoes", price: "₹3,000", img: "https://redtape.com/cdn/shop/files/RSL1017_1.jpg?v=1755859973&width=1920" },
    { id: 4, name: "Smart Watch", price: "₹5,000", img: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f" },
    { id: 5, name: "Laptop", price: "₹55,000", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
    { id: 6, name: "Tablet", price: "₹20,000", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e" },
    { id: 7, name: "Backpack", price: "₹1,200", img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" },
    { id: 8, name: "Camera", price: "₹35,000", img: "https://images-cdn.ubuy.co.in/65fe64a89de64a706c0120dc-canon-eos-5d-mark-iv-dslr-camera-with.jpg" },
    { id: 9, name: "Keyboard", price: "₹1,500", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
    { id: 10, name: "Gaming Mouse", price: "₹1,800", img: "https://images.meesho.com/images/products/471329513/hqjr2_512.webp?width=512" },
    { id: 11, name: "Jacket", price: "₹2,200", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHDZynpoFRvyxe_OfJiHmW-XMQvs0sD-szBQ&s" },
    { id: 12, name: "Sunglasses", price: "₹999", img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c" },
  ];

  return (
    <Container className="mt-4">
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={3} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={product.img}
                alt={product.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
