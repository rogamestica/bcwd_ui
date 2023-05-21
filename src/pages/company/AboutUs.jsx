import { Container } from "react-bootstrap";
import Banner from "../../components/Banner";

import Pagination from "../../components/Pagination";
import Breadcrumb from "../../components/Breadcrumb";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import image from '../../static/img/no-image.png';
import eye from '../../static/svg/eye.svg';
import briefcase from '../../static/svg/briefcase.svg';
import core from '../../static/svg/corevalues.svg';


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
        
        <h3 style={{fontFamily: 'Roboto', fontSize: '50px'}}> CORE STRATEGY</h3>
        <p style={{fontFamily: 'Roboto-light', fontSize: '30px'}}>Efficient and effective management of all resources for sustainable water supply in Butuan City.</p>

          
        <Row style ={{marginTop: '20px', marginBotton: '20px'}}>
          <Col> 
            <div className="container mytext"style={{
          background: "#318CE7",
          height: "450px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: '20px'  }}>
            <img 
                   className="m-2"
                   src={eye}
                   alt="eye"
                   width="200"
                   height="200"
                   />
              <h2 style={{ color: "white", fontFamily: "Roboto" }}>Vision</h2>
              <p style={{ color: "white", fontFamily: "Roboto-regular" }}>A leader in the water and sanitation industry advancing integrated water resource management.</p>
            </div>
          </Col>

          <Col>
           <div className="container mytext" style={{
          background: "#318CE7",
          height: "450px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: '20px'  }}>
           <img 
                   className="m-2"
                   src={briefcase}
                   alt="briefcase"
                   width="150"
                   height="150"
                   />
            <h2 style={{ color: "white", fontFamily: "Roboto" }} >Mission</h2>
            <p style={{ color: "white", fontFamily: "Roboto-regular" }}>Butuan City Water District a service oriented entity endeavors to preserve the environment, deliver quality service and satisfy its customers.</p>
          </div>
           </Col>
           <Col> 
           <div className="container mytext" style={{
          background: "#318CE7",
          height: "450px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: '20px'  }}>
           <img 
                   className="m-2"
                   src={core}
                   alt="core"
                   width="150"
                   height="150"
                   />
            <h2 style={{ color: "white", fontFamily: "Roboto" }}>CORE Values</h2>
            <p style={{ color: "white", fontFamily: "Roboto-regular" }}>C - Commitment</p>
            <p style={{ color: "white", fontFamily: "Roboto-regular" }}>L - Leadership</p>
            <p style={{ color: "white", fontFamily: "Roboto-regular" }}>I - Integrity</p>
            <p style={{ color: "white", fontFamily: "Roboto-regular" }}>E - Excellence</p>
            <p style={{ color: "white", fontFamily: "Roboto-regular" }}>N - Novelty (Innovation)</p>
            <p style={{ color: "white", fontFamily: "Roboto-regular" }}>S - Safety</p>
          </div>
           </Col>
        </Row>

        <div className="container-fluid background" style={{ backgroundColor: "#318CE7", width: "100%", marginTop: "30px",  }}>
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
                <p style={{ color: "white", fontFamily: "Roboto-regular" }}>I. Acquiring, installing, improving, maintaining and operating water supply and distribution system for domestic, industrial, municipal and agricultural uses for residents and lands within the boundaries of such districts;</p>
                <p style={{ color: "white", fontFamily: "Roboto-regular" }}>II. Providing, maintaining, and operating wastewater collection, treatment and disposal facilities; and</p>
                <p style={{ color: "white", fontFamily: "Roboto-regular"}}>III. Conducting such other functions and operations incidental to water resource development, utilization and disposal within such districts, as are necessary or incidental to said purpose.</p>
              
            </div>
          </div>
        </div>
                  
        <div className="container head" style={{ textAlign: "center", fontFamily: "Roboto-boldest", marginTop: "30px" }}>
          <h1>G  O  A  L  S</h1>
        </div>

          
          <Row>
              <Col style={{border: "1px solid #118DF0", margin: "10px", borderRadius: "10px", backgroundColor: "#318CE7"}}>
                <div className="container mytext3">
                  <p style={{ color: "white", fontFamily: "Roboto-regular" }}>1. Protection, rehabilitation and conservation of Taguibo Watershed Forest Reserve.</p>
                </div>
              </Col>
              <Col style={{border: "1px solid #118DF0", margin: "10px", borderRadius: "10px", backgroundColor: "#318CE7"}}>
                <div className="container mytext3">
                  <p style={{ color: "white", fontFamily: "Roboto-regular" }}>4. Reduce Non-Revenue Water to 20%.</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col style={{border: "1px solid #118DF0", margin: "10px", borderRadius: "10px", backgroundColor: "#318CE7"}}>
                <div className="container mytext3">
                  <p style={{ color: "white", fontFamily: "Roboto-regular" }}>2. Sustain quality of water in accordance with PNSDW.</p>
                </div>
              </Col>
              <Col style={{border: "1px solid #118DF0", margin: "10px", borderRadius: "10px", backgroundColor: "#318CE7"}}>
                <div className="container mytext3">
                  <p style={{ color: "white", fontFamily: "Roboto-regular" }}>5. Provide fast and efficient water related services for every concessionaires.</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col style={{border: "1px solid #118DF0", margin: "10px", borderRadius: "10px", backgroundColor: "#318CE7"}}>
                <div className="container mytext3">
                  <p style={{ color: "white", fontFamily: "Roboto-regular" }}>3. Increase availablity of water supply to all concessionaires for 24/7.</p>
                </div>
              </Col>
              <Col style={{border: "1px solid #118DF0", margin: "10px", borderRadius: "10px", backgroundColor: "#318CE7"}}>
                <div className="container mytext3">
                  <p style={{ color: "white", fontFamily: "Roboto-regular" }}>6. Continuous capacity building and enhance working environment of employees.</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} style={{border: "1px solid #118DF0", margin: "10px", borderRadius: "10px", backgroundColor: "#318CE7"}}>
                <div className="container mytext3">
                  <p style={{ color: "white", fontFamily: "Roboto-regular" }}>7. Establishment of mechanism for Septage Management Program.</p>
                </div>
              </Col>
            </Row>


      </Container>
      <Pagination />
      </>
    );
  };
  
  export default AboutUs;