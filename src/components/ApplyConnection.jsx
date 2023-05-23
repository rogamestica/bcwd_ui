import React from 'react';
import Banner from "./Banner";
import Breadcrumb from "./Breadcrumb";
import Container from 'react-bootstrap/Container';
import tutorial from '../static/video/tutorial.mp4';

const ApplyForConnection = () => {
  return (
    <>
    <Banner title={"Apply for Connection"} />
    <Container>
        <Breadcrumb
          paths={[
            { name: "Home", url: "/" },
            { name: "Apply for Connection", url: "/applyconnection" },
            // { name: "About us", url: "/news/about" },
          ]}
        />
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h2 style={{fontFamily: 'Roboto', fontSize: '30px', listStyle: 'none'}}>Steps to Apply for a New Water Connection:</h2>
          <ol style={{marginTop: '20px'}}>
            <li style={{fontFamily: 'Roboto-Light', fontSize: '20px', listStyleType: 'none'}}>Step 1: Gather required documents and information.</li>
            <li style={{fontFamily: 'Roboto-Light', fontSize: '20px', listStyleType: 'none'}}>Step 2: Fill out the application form.</li>
            <li style={{fontFamily: 'Roboto-Light', fontSize: '20px', listStyleType: 'none'}}>Step 3: Submit the application form along with necessary documents.</li>
            <li style={{fontFamily: 'Roboto-Light', fontSize: '20px', listStyleType: 'none'}}>Step 4: Pay the required fees.</li>
            <li style={{fontFamily: 'Roboto-Light', fontSize: '20px', listStyleType: 'none'}}>Step 5: Await approval and installation of the water connection.</li>
          </ol>
        </div>
        <div className="col-lg-6">
          <h2 style={{fontFamily: 'Roboto', fontSize: '20px'}}>Video Tutorial: How to Apply for a New Water Connection</h2>
          <iframe
            width="100%"
            height="315"
            src={tutorial}
            title="Video Tutorial"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
    </Container>
    </>
  );
};

export default ApplyForConnection;
