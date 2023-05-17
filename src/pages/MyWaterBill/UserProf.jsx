import React, { useState } from 'react';
import Banner from "../../components/Banner";
import Breadcrumb from "../../components/Breadcrumb";
import { Container } from 'react-bootstrap';

const WaterBill = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [waterBill, setWaterBill, ] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isSignOutClicked, setIsSignOutClicked] = useState(false);

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
  
  const PersonalInfo = () => {
    // Simulated anonymous personal information
    const name = "John Doe";
    const address = "123 Main St";
    const contact = "555-1234";

    return (
      <div>
        <h2>Personal Information</h2>
        <p>Name: {name}</p>
        <p>Address: {address}</p>
        <p>Contact: {contact}</p>
      </div>
    );
  };

  const Accountnumber=() => {
    const accountnumber = "1234345678";
    const name= "John Doe";

    return(
      <div>
        <h2> Account Information</h2>
        <p>Account Number: {accountnumber}</p>
        <p>Account Name: {name}</p>
      </div>
    )
  }

  const SignInForm = ({ onSignIn, setShowPopup }) => {
    const handleSignIn = () => {
      onSignIn();
      setShowPopup(true);
    };

    return (
      <div>
        <h2>Sign In</h2>
        <form>
          {/* Add input fields for username and password */}
          <button type="button" onClick={handleSignIn}>
            Display my water bill
          </button>
        </form>
      </div>
    );
  };

  return (
    <Container className="mt-4">
      <div>
        {!isSignedIn || isSignOutClicked ? (
          <>
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
          </>
        ) : (
          <>
            <Banner title={"User Profile"} />
            <Breadcrumb
              paths={[
                { name: "Home", url: "/" },
                { name: "User Profile", url: "/userprof" },
              ]}
            />
            <Accountnumber/>
            <div>
              <h2 style={{ color: "blue", fontWeight: "bold" }}>
                Welcome, User!
              </h2>
              <p>Your water bill: {waterBill}</p>
              <button onClick={handleSignOut}>Sign Out</button>
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default WaterBill;
