import React, { useState } from "react";
import Banner from "../../components/Banner";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Pagination from "../../components/Pagination";
import Breadcrumb from "../../components/Breadcrumb";

import InvitationCard from "../../components/Bidding/InvitationCard";
import JobOrderCard from "../../components/Bidding/JobOrderCard";
import NoticeofAward from "../../components/Bidding/NoticeCard";
import PurchaseOrder from "../../components/Bidding/PurchaseOrderCard";
import RequestforQuotation from "../../components/Bidding/RequestforQuotationCard";
import Notification from "../../components/Bidding/NotificationCard";
import ForBidding from "../../components/Bidding/ForBiddingCard";
import Other from "../../components/Bidding/OtherCard";


const Bidding = () => {
  const [activeCategory, setActiveCategory] = useState("Invitation to Bid");
  const categories = [
    {
      title: "Invitation to Bid",
      content: "This is the content for Invitation to Bid category."
    },
    {
      title: "Job Order",
      content: "This is the content for Job Order category."
    },
    {
      title: "Notice of Award",
      content: "This is the content for Notice of Award category."
    },
    {
      title: "Purchase Order",
      content: "This is the content for Purchase Order category."
    },
    {
      title: "Request for Quotation",
      content: "This is the content for Request for Quotation category."
    },
    {
      title: "Notification of Non-winning Bidders",
      content: "This is the content for Notification of Non-winning Bidders category."
    },
    {
      title: "For Bidding",
      content: "This is the content for For Bidding category."
    },
    {
      title: "Other Notices",
      content: "This is the content for Other Notices category."
    }
  ];

  const handleClick = (categoryTitle) => {
    setActiveCategory(categoryTitle);
  };

  return (
    <>
      <Banner title={"Bidding"} />
      <Container>
        <Breadcrumb
          paths={[
            { name: "Home", url: "/" },
            { name: "Bidding", url: "/bidding" },
          ]}
        />

        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mr-auto">
              {categories.map((category) => (
                <Nav.Link
                  key={category.title}
                  onClick={() => handleClick(category.title)}
                  className={`nav-link ${category.title === activeCategory && "active"}`}
                  style={{
                    borderRadius: "0px",
                    transition: "background-color 0.3s ease",
                    backgroundColor: category.title === activeCategory ? "#ddd" : "initial"
                  }}
                >
                  {category.title}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Row className="mt-4">
          <Col>
            {categories.map((category) => (
              <div key={category.title} style={{ display: category.title ===
                activeCategory ? "block" : "none" }}>
                <h2 className="mb-4" style={{ fontSize: "30px" }}>{category.title}</h2>
                {category.title === "Invitation to Bid" && <InvitationCard content={category.content} />}
                {category.title === "Job Order" && <JobOrderCard content={category.content} />}
                {category.title === "Notice of Award" && <NoticeofAward content={category.content} />}
                {category.title === "Purchase Order" && <PurchaseOrder content={category.content} />}
                {category.title === "Request for Quotation" && <RequestforQuotation content={category.content} />}
                {category.title === "Notification of Non-winning Bidders" && <Notification content={category.content} />}
                {category.title === "For Bidding" && <ForBidding content={category.content} />}
                {category.title === "Other Notices" && <Other content={category.content} />}
              </div>
            ))}
          </Col>
        </Row>
      </Container>

      <Pagination />
    </>
  );
};

export default Bidding;
