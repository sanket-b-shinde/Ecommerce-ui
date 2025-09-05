import { Container, Row, Col, Button, Card } from "react-bootstrap";
function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="bg-dark text-white text-center d-flex align-items-center justify-content-center"
        style={{
          height: "70vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589182373728-79b07e6a5b37')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-dark bg-opacity-50 p-5 rounded">
          <h1 className="display-4 fw-bold">Welcome to Our Shop</h1>
          <p className="lead">Find the best products at unbeatable prices.</p>
          <Button variant="warning" size="lg">
            Shop Now
          </Button>
        </div>
      </div>

      {/* Categories */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Featured Categories</h2>
        <Row>
          {["Electronics", "Fashion", "Home & Kitchen", "Sports"].map(
            (cat, i) => (
              <Col md={3} sm={6} key={i} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={`https://source.unsplash.com/300x200/?${cat}`}
                  />
                  <Card.Body className="text-center">
                    <Card.Title>{cat}</Card.Title>
                    <Button variant="outline-primary">Explore</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
