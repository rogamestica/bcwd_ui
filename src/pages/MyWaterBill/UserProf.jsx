import React, { useState } from 'react';
import Banner from "../../components/Banner";
import Breadcrumb from "../../components/Breadcrumb";
import { Container } from 'react-bootstrap';
import BillsPaymentPartners from '../bills_payments/BillsPaymentPartners';
import PersonalInfo from './PersonalInfo';
import Account from './Account';

const WaterBill = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [waterBill, setWaterBill] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isSignOutClicked, setIsSignOutClicked] = useState(false);

  const handleLinkClick = () => {
    // Redirect to a new page
    window.location.href = { BillsPaymentPartners };
  };

  const handleBackPersonalInfo=() =>{
    setIsSignedIn(false);
    setShowPopup(false);
    setIsSignOutClicked(false);
  }

  const handleSignIn = () => {
    setIsSignedIn(true);
    // Simulate fetching the water bill data (replace with your own logic)
    setWaterBill('$100');
    setShowPopup(false);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    setWaterBill('');
    setShowPopup(false);
    setIsSignOutClicked(true);
    window.location.reload(); // Refresh the page
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };


  const SignInForm = ({ onSignIn, setShowPopup }) => {
    const handleSignIn = () => {
      onSignIn();
      setShowPopup(true);
    };

    return (
      <div>
        <h2>Sign In</h2>
        <form style={{ marginBottom: "50px" }}>
          <button type="button" onClick={handleSignIn}>
            Display my water bill
          </button>
        </form>
      </div>
    );
  };

  return (
    <Container className="mt-4" style={{ height: '100vh', overflow: 'auto' }}>
      <div>
        {!isSignedIn || isSignOutClicked ? (
          <>
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
              <Container className="position-relative"
                style={{ zIndex: 10000, background: "white", marginTop: "40px", marginBottom: "40px", height: '100%', overflow: 'auto' }}>
                <Banner title={"User Profile"} />
                <Breadcrumb
                  paths={[
                    { name: "Home", url: "/" },
                    { name: "User Profile", url: "/userprof" },
                  ]}
                />
                <PersonalInfo />
                <SignInForm onSignIn={handleSignIn} setShowPopup={setShowPopup} />
                {showPopup && (
                  <div className="popup">
                    <div className="popup-content">
                      <span className="close" onClick={handlePopupClose}>
                        &times;
                      </span>
                      <p>Please sign in to continue.</p>
                    </div>
                  </div>
                )}
              </Container>
            </div>
          </>
        ) : (
          <>
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
              <Container className="position-relative"
                 style={{ zIndex: 10000, background: "white", marginTop: "40px", marginBottom: "40px", height: '100%', overflow: 'auto' }}>
                <Banner title={"User Profile"} />
                <Breadcrumb
                  paths={[
                    { name: "Home", url: "/" },
                    { name: "User Profile", url: "/userprof" },
                  ]} />
                <h2 style={{ color: "blue", fontWeight: "bold" }}>
                  Welcome, BCWD Customers!
                </h2>
                <Account/>
                <div>
                  <p style={{ marginTop: "10px", marginBottom: "50px",  color: 'black'}}>Your water bill: {waterBill}</p>
                  <button onClick={handleSignOut}>Sign Out</button>
                  <button type="button" href='/personalinfo' onClick={handleBackPersonalInfo}> Back</button>
                </div>
                <div>
                  <h1 style={{ marginTop: "10px", marginBottom: "30px", color: 'black' }}>You can pay online.</h1>
                  <p style={{ marginTop: "10px", marginBottom: "50px",  color: 'black'}}>
                    Click: {' '}
                    <a href='/billspaymentpartners' onClick={handleLinkClick}>
                      Bill Payment Partners
                    </a>
                  </p>
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
