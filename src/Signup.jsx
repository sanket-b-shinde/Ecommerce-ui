import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./Signup.css";

function Signup() {
  return (
    <div className="signup-wrapper d-flex align-items-center justify-content-center min-vh-100">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Card className="signup-card shadow-lg border-0 rounded-4 p-4">
              <Card.Body>
                <h2 className="text-center fw-bold mb-4 text-gradient">
                  Create Account ✨
                </h2>
                <p className="text-center text-muted mb-4">
                  Join us and start your shopping journey
                </p>

                <Form>
                  {/* Full Name */}
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Control
                      type="text"
                      placeholder="Full Name"
                      className="form-control-lg"
                      required
                    />
                  </Form.Group>

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
                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      className="form-control-lg"
                      required
                    />
                  </Form.Group>

                  {/* Confirm Password */}
                  <Form.Group className="mb-4" controlId="formConfirmPassword">
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      className="form-control-lg"
                      required
                    />
                  </Form.Group>

                  {/* Sign Up Button */}
                  <div className="d-grid mb-3">
                    <Button type="submit" className="btn-signup" size="lg">
                      Sign Up
                    </Button>
                  </div>
                </Form>

                <p className="text-center mb-0">
                  Already have an account?{" "}
                  <a href="/login" className="fw-semibold link-login">
                    Log In
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

export default Signup;
