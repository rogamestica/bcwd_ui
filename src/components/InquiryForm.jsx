import React, { useState } from 'react';
import Breadcrumb from "./Breadcrumb";
import Banner from "./Banner";
import { Container } from "react-bootstrap";

const InquiryForm = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [accountName, setAccountName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    

    // Process the form submission here (e.g., send the data to the server)

    // Reset form fields
    setAccountNumber('');
    setAccountName('');
    setMessage('');

    // Show the "Thank You" message
    setIsSubmitted(true);
  };

  return (
    <>
      <Banner title={"Send your Inquiries, Concern or Complaint"} />
      <Container>
        <Breadcrumb
          paths={[
            { name: "Home", url: "/" },
            { name: "InquiryForm", url: "/inquiryform" },
          ]}
        />
        <div className="container">
          <h2 style={{ fontFamily: 'Roboto', fontSize: '30px', fontWeight: 'bold' }}>Send Inquiry / Submit Complaint / Raise Concern</h2>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="accountNumber" style={{ fontFamily: 'Roboto', fontSize: 'lighter', marginTop: '20px' }}>Account Number:</label>
                <input
                  type="text"
                  className="form-control"
                  id="accountNumber"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="accountName" style={{ fontFamily: 'Roboto', fontSize: 'lighter', marginTop: '20px' }}>Account Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="accountName"
                  value={accountName}
                  onChange={(e) => setAccountName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" style={{ fontFamily: 'Roboto', fontSize: 'lighter', marginTop: '20px' }}>Message:</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ fontFamily: 'Roboto', fontSize: 'lighter', marginTop: '20px', marginBottom: '30px' }}>
                Submit
              </button>
            </form>
          ) : (
            <div>
              <p style={{ fontFamily: 'Roboto', fontSize: '20px', fontWeight: 'bold', marginTop: '20px' }}>
                Subject: Water District Inquiry
              </p>
              <p>
                Dear {accountName},
              </p>
              <p>
                Thank you for your inquiry regarding {message}. We appreciate your interest in our water district.
              </p>
              <p>
                We are currently reviewing your inquiry and will provide a prompt response shortly.
              </p>
              <p>
                If you have any further questions or concerns, please feel free to contact our customer service team by calling the phone number 0918 930 4234 or telephone number 342-3145, 341-6375.
              </p>
              <p>
                Thank you for your patience.
              </p>
              <p>
                Best regards,
              </p>
              <p>Rogamestica Pascual</p>
              <p>  CEO </p>
              <p>  Butuan City Water District Name</p>
              
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default InquiryForm;
