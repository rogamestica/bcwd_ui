import { Container } from "react-bootstrap";
import Banner from "../../components/Banner";

import Pagination from "../../components/Pagination";
import Breadcrumb from "../../components/Breadcrumb";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import image from '../../static/img/no-image.png';

const AboutUs = () => {
    return (
      <>
      <Banner title={"About US"}/>
      <Container>
      <Breadcrumb
          paths={[
            { name: "Company", url: "#" },
            { name: "About Us", url: "/aboutus" },
            // { name: "About us", url: "/news/about" },
          ]}
        />
        <h3> CORE STRATEGY</h3>
        <p>Efficient and effective management of all resources for sustainable water supply in Butuan City.</p>

          
        <Row>
          <Col> 
            <div className="container mytext" style={{ background: "#318CE7", height: "400px", alignContent: "center" }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill="white">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zM12 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"/>
                <path d="M12 6c-2.75 0-5 2.24-5 5s2.25 5 5 5s5-2.24 5-5s-2.25-5-5-5zm0 8a3 3 0 1 1 0-6a3 3 0 0 1 0 6z"/>
              </svg>
              <h2 style={{ color: "white", fontFamily: "Roboto" }}>Vision</h2>
              <p style={{ color: "white", fontFamily: "Roboto", fontWeight: "lighter" }}>A leader in the water and sanitation industry advancing integrated water resource management.</p>
            </div>
          </Col>

          <Col>
           <div className="container mytext" style={{background:"#318CE7", height:"400px" }}>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill="white">
            <path d="M3 6H21V18H3V6ZM3 4C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H21C22.1 20 23 19.1 23 18V6C23 4.9 22.1 4 21 4H3ZM7 8H17V9H7V8ZM7 10H17V11H7V10ZM7 12H17V13H7V12Z" />
          </svg>
            <h2 style={{ color: "white", fontFamily: "Roboto" }} >Mission</h2>
            <p style={{ color: "white", fontFamily: "Roboto", fontWeight: "lighter" }}>Butuan City Water District a service oriented entity endeavors to preserve the environment, deliver quality service and satisfy its customers.</p>
          </div>
           </Col>
           <Col> 
           <div className="container mytext" style={{background:"#318CE7", height:"400px" }}>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50">
            <rect x="4" y="4" width="16" height="16" rx="2" ry="2" stroke="#FFF" strokeWidth="2" fill="none" />
            <rect x="8" y="8" width="16" height="16" rx="2" ry="2" stroke="#FFF" strokeWidth="2" fill="none" />
          </svg>
            <h2 style={{ color: "white", fontFamily: "Roboto" }}>CORE Values</h2>
            <p style={{ color: "white", fontFamily: "Roboto", fontWeight: "lighter" }}>C - Commitment</p>
            <p style={{ color: "white", fontFamily: "Roboto", fontWeight: "lighter" }}>L - Leadership</p>
            <p style={{ color: "white", fontFamily: "Roboto", fontWeight: "lighter" }}>I - Integrity</p>
            <p style={{ color: "white", fontFamily: "Roboto", fontWeight: "lighter" }}>E - Excellence</p>
            <p style={{ color: "white", fontFamily: "Roboto", fontWeight: "lighter" }}>N - Novelty (Innovation)</p>
            <p style={{ color: "white", fontFamily: "Roboto", fontWeight: "lighter" }}>S - Safety</p>
          </div>
           </Col>
        </Row>

        <div className="container-fluid background" style={{ backgroundColor: "#318CE7", width: "100%", marginTop: "30px" }}>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6">
              <div className="">
                {/* Card content goes here */}
                <img src={image} alt="hey" className="img-fluid" />
              </div>
            </div>
            <div className="col-12 col-lg-6" style={{marginTop: "30px", textAlign: "center" }}>
                {/* Card content goes here */}
                <h2 style={{ color: "white", fontFamily: "Roboto" }}>Butuan Water District Purpose</h2>
                <p style={{ color: "white", fontFamily: "Roboto", fontWeight: "lighter" }}>I. Acquiring, installing, improving, maintaining and operating water supply and distribution system for domestic, industrial, municipal and agricultural uses for residents and lands within the boundaries of such districts;</p>
                <p style={{ color: "white", fontFamily: "Roboto", fontWeight: "lighter" }}>II. Providing, maintaining, and operating wastewater collection, treatment and disposal facilities; and</p>
                <p style={{ color: "white", fontFamily: "Roboto", fontWeight: "lighter" }}>III. Conducting such other functions and operations incidental to water resource development, utilization and disposal within such districts, as are necessary or incidental to said purpose.</p>
              
            </div>
          </div>
        </div>
                  
        <div className="container head" style={{ textAlign: "center", fontFamily: "Roboto", fontWeight: "bold", marginTop: "30px" }}>
          <h1>GOALS</h1>
        </div>

          
          <Row>
              <Col style={{border: "1px solid #118DF0", margin: "10px", borderRadius: "10px", backgroundColor: "#318CE7"}}>
                <div className="container mytext3">
                  <p style={{ color: "white", fontFamily: "Roboto", fontWeight: "lighter" }}>1. Protection, rehabilitation and conservation of Taguibo Watershed Forest Reserve.</p>
                </div>
              </Col>
              <Col style={{border: "1px solid #118DF0", margin: "10px", borderRadius: "10px", backgroundColor: "#318CE7"}}>
                <div className="container mytext3">
                  <p style={{ color: "white", fontFamily: "Roboto", fontWeight: "lighter" }}>4. Reduce Non-Revenue Water to 20%.</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col style={{border: "1px solid #118DF0", margin: "10px", borderRadius: "10px", backgroundColor: "#318CE7"}}>
                <div className="container mytext3">
                  <p style={{ color: "white", fontFamily: "Roboto", fontWeight: "lighter" }}>2. Sustain quality of water in accordance with PNSDW.</p>
                </div>
              </Col>
              <Col style={{border: "1px solid #118DF0", margin: "10px", borderRadius: "10px", backgroundColor: "#318CE7"}}>
                <div className="container mytext3">
                  <p style={{ color: "white", fontFamily: "Roboto", fontWeight: "lighter" }}>5. Provide fast and efficient water related services for every concessionaires.</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col style={{border: "1px solid #118DF0", margin: "10px", borderRadius: "10px", backgroundColor: "#318CE7"}}>
                <div className="container mytext3">
                  <p style={{ color: "white", fontFamily: "Roboto", fontWeight: "lighter" }}>3. Increase availablity of water supply to all concessionaires for 24/7.</p>
                </div>
              </Col>
              <Col style={{border: "1px solid #118DF0", margin: "10px", borderRadius: "10px", backgroundColor: "#318CE7"}}>
                <div className="container mytext3">
                  <p style={{ color: "white", fontFamily: "Roboto", fontWeight: "lighter" }}>6. Continuous capacity building and enhance working environment of employees.</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} style={{border: "1px solid #118DF0", margin: "10px", borderRadius: "10px", backgroundColor: "#318CE7"}}>
                <div className="container mytext3">
                  <p style={{ color: "white", fontFamily: "Roboto", fontWeight: "lighter" }}>7. Establishment of mechanism for Septage Management Program.</p>
                </div>
              </Col>
            </Row>


      </Container>
      <Pagination />
      </>
    );
  };
  
  export default AboutUs;