

import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import UserProf from './UserProf';

const SignIn = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [billAmount, setBillAmount] = useState(null);

  const handleSignIn = () => {
    // Perform sign-in logic with email and password
    // ...

    // Simulate fetching the water bill from the backend
    const fetchedBillAmount = 100; // Replace with your logic to fetch the actual water bill amount
    setBillAmount(fetchedBillAmount);

    // Update the state and set signedIn to true
    setSignedIn(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform sign-in logic with email and password
    // ...
    handleSignIn(); // Call handleSignIn when the form is submitted
  };

  return (
    <>
    <Container >
      {!signedIn ? (
        <div
        className="position-fixed w-100 h-100"
        style={{
          top: 0,
          left: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(8px)",
          zIndex: 9999,
        }}
      >
        <Container className="position-relative d-flex justify-content-center align-items-center" 
        style={{ zIndex: 10000 , background: "white", marginTop: "20%", width: "50rem"}}>
      
          <Form onSubmit={handleSubmit}>
          <h1 style={{fontFamily: "sans-serif", fontWeight:"bold", marginTop: "10px" }}>Sign In</h1>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" style={{marginTop: "10px"}}>
              Sign In
            </Button>
          </Form> </Container>
          
        </div>

      ) : (
        <div className="fullscreen">
          <UserProf billAmount={billAmount} />
        </div>
      )} 
    </Container>
    </>
  );
};

export default SignIn;

