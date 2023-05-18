import { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Banner from "../../components/Banner";
import Pagination from "../../components/Pagination";
import Breadcrumb from "../../components/Breadcrumb";


import Picture11 from "../../static/img/billpp/Picture11.png";
import Picture12 from "../../static/img/billpp/Picture12.png";
import Gcash from "../../static/img/billpp/gcash.jpg";
import Paymaya from "../../static/img/billpp/paymaya.jpg";

const BillsPaymentPartners = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Banner title={"Bills Payment Partners"} />
      <Container>
        <Breadcrumb
          paths={[
            { name: "Home", url: "/" },
            { name: "Bill Payment Partners", url: "/billspaymentpartners" },
          ]}
        />

        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <div className="border-blue p-3 m-2">
              <p>You can pay Via:</p>
              <img
                src={Picture11}
                alt="bill"
                className="img-fluid clickable"
                onClick={() => handleImageClick(Gcash)}
              />
              <img
                src={Picture12}
                alt="bill"
                className="img-fluid clickable"
                onClick={() => handleImageClick(Paymaya)}
              />
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <p>Reminders before paying your water bill:</p>
            <ul>
              <li>
                Examine your bill carefully upon receipt. If no complaint is made within 60 days of receipt, the bill is considered true and correct.
              </li>
              <li>Always bring your Statement of Account when paying.</li>
              <li>
                Check payments should be payable to Maynilad Water Services, Inc. Do not forget to write your Contract Account Number, Account Name, Service Address, and Contact Number at the back of the check.
              </li>
              <li>Make sure to pay your bills at any Maynilad-accredited payment channels.</li>
              <li>
                Before leaving the payment counter of our accredited payment facilities, check the details indicated in the payment stub/machine validation to make sure that the correct payment was posted.
              </li>
            </ul>
          </Col>
        </Row>

        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Body>
            <img src={selectedImage} alt="bill" className="img-fluid" />
          </Modal.Body>
        </Modal>
      </Container>

      <Pagination />
    </>
  );
};

export default BillsPaymentPartners;
