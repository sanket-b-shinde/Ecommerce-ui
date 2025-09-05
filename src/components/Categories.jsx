import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './Categories.css'

const categoriesData = {
  Electronics: [
    {
      id: 1,
      name: "Smartphone",
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
    {
      id: 2,
      name: "Laptop",
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    },
    { id: 2, name: "Headphones", price: "₹2,500", img: "https://www.leafstudios.in/cdn/shop/files/1_a43c5e0b-3a47-497d-acec-b4764259b10e_1024x1024.png?v=1750486829" },
    { id: 3, name: "Shoes", price: "₹3,000", img: "https://redtape.com/cdn/shop/files/RSL1017_1.jpg?v=1755859973&width=1920" },
    { id: 4, name: "Smart Watch", price: "₹5,000", img: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f" },
    { id: 8, name: "Camera", price: "₹35,000", img: "https://images-cdn.ubuy.co.in/65fe64a89de64a706c0120dc-canon-eos-5d-mark-iv-dslr-camera-with.jpg" },
    { id: 9, name: "Keyboard", price: "₹1,500", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
    { id: 10, name: "Gaming Mouse", price: "₹1,800", img: "https://images.meesho.com/images/products/471329513/hqjr2_512.webp?width=512" },
  ],
  Fashion: [
    {
      id: 3,
      name: "T-Shirt",
      img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
    },
    {
      id: 4,
      name: "Sneakers",
      img: "https://images.unsplash.com/photo-1519741497674-611481863552",
    },
  ],
  Grocery: [
    {
      id: 5,
      name: "Fresh Vegetables",
      img: "https://i0.wp.com/greebleagro.com/wp-content/uploads/2019/03/online-vegetables-in-gurgaon-1024x563.jpg?fit=1024%2C563&ssl=1",
    },
    {
      id: 6,
      name: "Fruits",
      img: "https://static.wixstatic.com/media/94982f_48ed3886e31440f1abaf6adb618baedd~mv2.jpg/v1/fill/w_2500,h_1421,al_c/94982f_48ed3886e31440f1abaf6adb618baedd~mv2.jpg",
    },
  ],
};

function Categories() {
  const [activeCategory, setActiveCategory] = useState("All");

  const allItems = [
    ...categoriesData.Electronics,
    ...categoriesData.Fashion,
    ...categoriesData.Grocery,
  ];

  const getItems = () => {
    if (activeCategory === "All") return allItems;
    return categoriesData[activeCategory];
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 fw-bold">Shop by Categories</h2>

      {/* Category Buttons */}
      <div className="d-flex justify-content-center gap-3 mb-5 flex-wrap">
        {["Electronics", "Fashion", "Grocery", "All"].map((cat) => (
          <Button
            key={cat}
            variant={activeCategory === cat ? "dark" : "outline-dark"}
            className="px-4 py-2 rounded-pill shadow-sm"
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Items Grid */}
      <Row className="g-4">
        {getItems().map((item) => (
          <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100 shadow-lg border-0 rounded-4 card-custom">
              <Card.Img
                variant="top"
                src={item.img}
                alt={item.name}
                className="rounded-top-4"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title className="fw-semibold">{item.name}</Card.Title>
                <Button variant="dark" className="rounded-pill px-3 mt-2">
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Categories;
