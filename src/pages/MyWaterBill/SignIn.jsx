import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import UserProf from './UserProf';
import { Link } from 'react-router-dom';

import linkedin from '../../static/svg/linkedin.svg';
import github from '../../static/svg/github.svg';
import google from '../../static/svg/google.svg';
import microsoft from '../../static/svg/microsoft.svg';

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

  const handleLinkClick = () => {
    // Redirect to a new page
    window.location.href = { UserProf };
  };

  return (
    <>
      <Container fluid className=" d-flex justify-content-center align-items-center">
        {!signedIn ? (
          <div
            className="position-fixed w-100 h-100  d-flex justify-content-center align-items-center"
            style={{
              top: 0,
              left: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(8px)",
              zIndex: 9999,
            }}
          >
            <div
              className="position-relative bg-white p-4"
              style={{
                zIndex: 10000,
                borderRadius: '20px',
                maxWidth: '500px',
                width: '90vw',
              }}
            >
              <Button
                variant="link"
                className="position-absolute top-0 end-0 m-3"
                href="."
                style={{ fontSize: "1.5rem", textDecoration: 'none' }}
              >
                X
              </Button>

              <div style={{ height: "650px", overflow: "scroll" }}> 
              <Form onSubmit={handleSubmit}>
                <svg width="48" height="52" viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginTop: '50px'}}>
                  <path d="M38.0134 42.0683L32.6596 26L46.6788 16.0683C50.1284 26.3768 46.6788 35.9317 38.0134 42.0683ZM46.6788 16.0683L41.325 0H23.9941L29.3203 16.0683C29.3203 16.0683 46.6788 16.0683 46.6788 16.0683ZM23.9941 0H6.66324L1.33703 16.0683H18.6679L23.9941 0ZM1.30943 16.0683C-2.11259 26.3768 1.30943 35.9317 9.97487 42.0683L15.3011 26L1.30943 16.0683ZM9.97487 42.0683L23.9941 52L38.0134 42.0683L23.9941 32.1366L9.97487 42.0683Z" fill="black"/>
                </svg>
                <h1 className="text-center font-weight-bold mt-4" style={{ color: 'black' }}>Auth0</h1>
                <p style={{ color: 'black' }}>Log in to Auth0 to continue to Auth0 Dashboard.</p>
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

                <>
                  <p style={{ marginTop: '10px', marginBottom: '50px', color: 'black' }}>
                    <a href="/userprof" onClick={handleLinkClick}>
                      <Button style={{ width: '100%', maxWidth: '30vw', backgroundColor: '#635DFF' }}>Continue</Button>
                    </a>
                  </p>
                  <p style={{ color: 'black' }}>
                    Don't you have an account?
                    <Link>Signup</Link>
                  </p>
                  <svg  height="1" viewBox="0 0 141 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.00119019" y1="0.5" x2="140.667" y2="0.5" stroke="#C2C8D0" />
                  </svg>
                  <span style={{ color: 'black' }}>OR</span>
                  <svg  height="1" viewBox="0 0 141 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.00119019" y1="0.5" x2="140.667" y2="0.5" stroke="#C2C8D0" />
                  </svg>
                </>

                <div className="d-flex flex-column align-items-center">
                  <div className="box" style={{ border: '1px solid #C2C8D0', padding: '10px',  marginTop: '10px', width: '300px'}}>
                    <div className="d-flex align-items-center mt-3">
                      <img src={linkedin} alt="LinkedIn Logo" className="mr-2" style={{ width: '30px', height: '30px' }} />
                      <span style={{ color: 'black' }}>Continue with LinkedIn</span>
                    </div>
                  </div>
                  <div className="box" style={{ border: '1px solid #C2C8D0', padding: '10px',  marginTop: '10px', width: '300px'}}>
                    <div className="d-flex align-items-center mt-3">
                      <img src={microsoft} alt="Microsoft Logo" className="mr-2" style={{ width: '30px', height: '30px' }} />
                      <span style={{ color: 'black' }}>Continue with Microsoft</span>
                    </div>
                  </div>
                  <div className="box" style={{ border: '1px solid #C2C8D0', padding: '10px',  marginTop: '10px', width: '300px'}}>
                    <div className="d-flex align-items-center mt-3">
                      <img src={github} alt="GitHub Logo" className="mr-2" style={{ width: '30px', height: '30px' }} />
                      <span style={{ color: 'black' }}>Continue with GitHub</span>
                    </div>
                  </div>
                  <div className="box" style={{ border: '1px solid #C2C8D0', padding: '10px',  marginTop: '10px', width: '300px', marginBottom: '50px'}}>
                    <div className="d-flex align-items-center mt-3">
                      <img src={google} alt="Google Logo" className="mr-2" style={{ width: '30px', height: '30px' }} />
                      <span style={{ color: 'black' }}>Continue with Google</span>
                    </div>
                  </div>
                </div>


              </Form>
              </div>
            </div>
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
