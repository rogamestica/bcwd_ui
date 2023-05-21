import Banner from "../../components/Banner";
import { Container } from "react-bootstrap";
import Pagination from "../../components/Pagination";
import Breadcrumb from "../../components/Breadcrumb";
import Header1 from "../../components/Header1";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import qmark from '../../static/svg/qmark.svg';
import telephone from '../../static/svg/telephone.svg';
import mail from '../../static/svg/mail.svg';
import phone from '../../static/svg/phone.svg';
import facebook from '../../static/svg/facebook.svg';
import twitter from '../../static/svg/twitter.svg';
import message from '../../static/svg/message.svg';
import applyservices from '../../static/svg/applyservices.svg';
import complaint from '../../static/svg/complaint.svg';
import otherconcern from '../../static/svg/otherconcern.svg';


const ContactUs = () => {
  return (
    <>
      <Banner title={"Contact US"} />
      <Container>
        <Breadcrumb
          paths={[
            { name: "Company", url: "#" },
            { name: "ContactUs", url: "/contactus" },
          ]}
        />
        <Row className="justify-content-left">
          <Col xs={12} md={6}>
            <Header1 header="WE LOVE TO HELP!" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Row>
              <Col xs={6}>
              <div className="container mytext" style={{ marginTop:"10px", background: "#318CE7", height: "200px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <img 
                   className="m-2"
                   src={message}
                   alt="message"
                   width="100"
                   height="100"
                   />
                <a href="/inquiryform" style={{color: 'white', textDecorationLine: 'none', fontSize: '17px', fontWeight: 'bold', fontFamily: 'Roboto'}}>Make an Inquiry</a>
              </div>
              </Col>
              <Col xs={6}>
                <div className="container mytext" style={{ marginTop:"10px", background: "#318CE7", height: "200px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <img 
                   className="m-2"
                   src={applyservices}
                   alt="apply"
                   width="100"
                   height="100"
                   />
                  <a href="/applyconnection" style={{color: 'white', textDecorationLine: 'none', fontSize: '17px', fontWeight: 'bold', fontFamily: 'Roboto'}}>Apply for Services</a>
                  {/* <p className="text"  style={{ color: "white" }}>c</p> */}
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <div className="container mytext" style={{ marginTop:"10px", background: "#318CE7", height: "200px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <img 
                   className="m-2"
                   src={complaint}
                   alt="complaint"
                   width="100"
                   height="100"
                   />
                <a href="/inquiryform" style={{color: 'white', textDecorationLine: 'none', fontSize: '17px', fontWeight: 'bold', fontFamily: 'Roboto'}}>Send a Complaint</a>
                </div>
              </Col>
              <Col xs={6}>
                <div className="container mytext" style={{ marginTop:"10px", background: "#318CE7", height: "200px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <img 
                   className="m-2"
                   src={otherconcern}
                   alt="otherconcern"
                   width="100"
                   height="100"
                   />
                <a href="/inquiryform" style={{color: 'white', textDecorationLine: 'none', fontSize: '17px', fontWeight: 'bold', fontFamily: 'Roboto'}}>Other Concerns</a>
                </div>
              </Col>
            </Row>
          </Col>


          <Col xs={12} md={6}>
            <div className="container mytext2">


              <div className="faq-item">
              <div class="row">
                  <div class="col-auto">
                  <img 
                   className="m-2"
                   src={qmark}
                   alt="qmark"
                   width="50"
                   height="50"
                   />
              </div>
              <div class="col">
              <a href="/faqs" style={{color: 'gray', textDecoration: 'line', fontWeight: 'bold', fontSize: '20px', marginBotton: '5px'  }}>Frequently Asked Questions (FAQs)</a>
              </div>
              </div>
              </div>


              <div className="faq-item">
              <div class="row">
                  <div class="col-auto">
                  <img 
                   className="m-2"
                   src={telephone}
                   alt="telephone"
                   width="50"
                   height="50"
                   />
              </div>
              <div class="col">
                <p style={{color: 'gray', fontSize: '20px', fontFamily: 'Roboto'  }}>Customer Hotline: 342-3145, 341-6375</p>
              </div>
              </div>
              </div>


              <div className="faq-item">
              <div class="row">
                  <div class="col-auto">
                  <img 
                   className="m-2"
                   src={mail}
                   alt="mail"
                   width="50"
                   height="50"
                   />
              </div>
              <div class="col">
                <p style={{color: 'gray', fontSize: '20px', fontFamily: 'Roboto'  }}>bcwd_pr@yahoo.com</p>
              </div>
              </div>
              </div>


              <div className="faq-item">
              <div class="row">
                  <div class="col-auto">
                  <img 
                   className="m-2"
                   src={phone}
                   alt="phone"
                   width="50"
                   height="50"
                   />
              </div>
              <div class="col">
                <p style={{color: 'gray', fontSize: '20px', fontFamily: 'Roboto'  }}> 0918 930 4234</p>
              </div>
              </div>
              </div>


              <div className="faq-item">
                <div className="row align-items-center">
                  <div className="col-auto">
                  <img 
                   className="m-2"
                   src={facebook}
                   alt="facebook"
                   width="50"
                   height="50"
                   />
                  </div>
                  <div className="col">
                    <p ><a href="https://www.facebook.com/profile.php?id=100064300855367" style={{color: 'gray', fontSize: '20px', textDecoration: 'none', fontFamily: 'Roboto'  }}>Facebook</a></p>
                  </div>
                </div>
              </div>


              <div class="faq-item">
  <div class="row align-items-center">
    <div class="col-auto">
    <img 
                   className="m-2"
                   src={twitter}
                   alt="twitter"
                   width="50"
                   height="50"
                   />
    </div>
    <div class="col">
      <p style={{color: 'gray', fontSize: '20px', fontFamily: 'Roboto'  }}>Twitter.com</p>
    </div>
  </div>
</div>



            </div>
          </Col>
        </Row>
      </Container>
      <Pagination />
    </>
  );
};

  
  export default ContactUs;