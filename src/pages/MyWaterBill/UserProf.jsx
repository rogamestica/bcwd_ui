import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BillsPaymentPartners from '../bills_payments/BillsPaymentPartners';
import PersonalInfo from './PersonalInfo';
import Account from './Account';
import BillingHistory from './BillingHistory';

const WaterBill = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [waterBill, setWaterBill] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isSignOutClicked, setIsSignOutClicked] = useState(false);

  const handleLinkClick = () => {
    // Redirect to a new page
    window.location.href = { BillsPaymentPartners };
  };

  const handleBackPersonalInfo = () => {
    setIsSignedIn(false);
    setShowPopup(false);
    setIsSignOutClicked(false);
  };

  const handleSignIn = () => {
    setIsSignedIn(true);
    // Simulate fetching the water bill data (replace with your own logic)
    setWaterBill('Php 1 210');
    setShowPopup(false);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    setWaterBill('');
    setShowPopup(false);
    setIsSignOutClicked(true);
    window.location.reload(); // Refresh the page
  };

  // const handlePopupClose = () => {
  //   setShowPopup(false);
  // };

  const SignInForm = ({ onSignIn, setShowPopup }) => {
    const handleSignIn = () => {
      onSignIn();
      setShowPopup(true);
    };

    return (
      <div>
        <form style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            type="button"
            onClick={handleSignIn}
            style={{
              padding: '10px 20px',
              background: '#27AE60',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
          >
            Display my water bill
          </button>
        </form>
      </div>
    );
  };

  return (
    <Container >
      <div>
        {!isSignedIn || isSignOutClicked ? (
          <>
               <Container fluid className="mt-4" style={{ Height: '100vh' }}>
                <Row>
                  <Col xs={12} md={6} className="mb-4 d-flex justify-content-start">
                    <Container>
                      <PersonalInfo />
                      <SignInForm onSignIn={handleSignIn} setShowPopup={setShowPopup} />
                    </Container>
                  </Col>
                  <Col xs={12} md={6} className="mb-4 d-flex justify-content-end">
                    <BillingHistory />
                  </Col>
                </Row>
              </Container>
          </>
        ) : (
          <>
            <div>
              <Container
                className="position-relative text-start"
                style={{
                  zIndex: 10000,
                  background: "white",
                  marginTop: "100px",
                  marginBottom: "40px",
                  height: '80%',
                  overflow: 'auto',
                  padding: '20px',
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '14px',
                  lineHeight: '1.6',
                  color: '#333333',
                  maxWidth: '600px',
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                  borderRadius: '4px',
                }}
              >
                <div style={{margin: '50px'}}>
                <Account />
                <div style={{ marginTop: '20px' }}>
                  <p style={{ color: '#777777', fontSize: '30px' }}>Your water bill: {waterBill}</p>
                </div>
                <div style={{ marginTop: '30px' }}>
                  <h1 style={{ color: '#333333', fontWeight: 'bold', fontSize: '24px' }}>
                    You can pay online.
                  </h1>
                  <p style={{ color: '#777777', marginBottom: '20px', fontSize: '15px' }}>
                    To make a payment, please click the link below to proceed to our
                    payment partners.
                  </p>
                  <p style={{ marginTop: "10px", marginBottom: "50px",  color: 'black'}}>
                    Click: {' '}
                    <a href='/billspaymentpartners' onClick={handleLinkClick}>
                      Bill Payment Partners
                    </a>
                  </p>
                </div> </div>
                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
                <a
                  href='#'
                  onClick={handleBackPersonalInfo}
                  style={{
                    color: '#0275D8',
                    textDecoration: 'underline',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    marginLeft: '20px',
                    marginTop: '100px'
                  }}
                >
                  Back
                </a>
                <a
                  href="/"
                  onClick={handleSignOut}
                  style={{
                    color: '#C82333',
                    textDecoration: 'underline',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    marginRight: '20px',
                    marginTop: '100px'
                  }}
                >
                  Sign Out
                </a>
              </div>

              </Container>
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default WaterBill;
