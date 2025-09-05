import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./Login.css";

function Login() {
  return (
    <div className="login-wrapper d-flex align-items-center justify-content-center min-vh-100">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Card className="login-card shadow-lg border-0 rounded-4 p-4">
              <Card.Body>
                <h2 className="text-center fw-bold mb-4 text-gradient">
                  Welcome Back 👋
                </h2>
                <p className="text-center text-muted mb-4">
                  Log in to continue shopping
                </p>

                <Form>
                  {/* Email */}
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Control
                      type="email"
                      placeholder="Email Address"
                      className="form-control-lg"
                      required
                    />
                  </Form.Group>

                  {/* Password */}
                  <Form.Group className="mb-4" controlId="formPassword">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      className="form-control-lg"
                      required
                    />
                  </Form.Group>

                  {/* Log In Button */}
                  <div className="d-grid mb-3">
                    <Button type="submit" className="btn-login" size="lg">
                      Log In
                    </Button>
                  </div>
                </Form>

                <p className="text-center mb-0">
                  Don’t have an account?{" "}
                  <a href="/signup" className="fw-semibold link-signup">
                    Sign Up
                  </a>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
