import Banner from "../../components/Banner";
import Cards from "../../components/Cards";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Pagination from "../../components/Pagination";
import Breadcrumb from "../../components/Breadcrumb";

const BcwdNews = () => {
  return (
    <>
      <Banner title={"BCWD News"} />
      <Container>
        <Breadcrumb
          paths={[
            { name: "Home", url: "/" },
            { name: "BCWD News", url: "/news" },
            // { name: "About us", url: "/news/about" },
          ]}
        />
        <Row xs={1} sm={2} md={3} lg={4} xl={3} className="g-4">
          <Col className="mb-4">
            <Cards />
          </Col>
          <Col className="mb-4">
            <Cards />
          </Col>
          <Col className="mb-4">
            <Cards />
          </Col>
          <Col className="mb-4">
            <Cards />
          </Col>
          <Col className="mb-4">
            <Cards />
          </Col>
          <Col className="mb-4">
            <Cards />
          </Col>
          <Col className="mb-4">
            <Cards />
          </Col>
          <Col className="mb-4">
            <Cards />
          </Col>
          <Col className="mb-4">
            <Cards />
          </Col>
        </Row>
      </Container>
      <Pagination />
    </>
  );
};

export default BcwdNews;
