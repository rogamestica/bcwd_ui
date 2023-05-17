import { Container, Row, Col } from "react-bootstrap";
import Banner from "../../components/Banner";
import Breadcrumb from "../../components/Breadcrumb";
import Paragraph from '../../components/Paragraph';
import MyTable from "../../components/MyTable";
import '../../static/css/header2.css';

const ServiceAdvisories = () => {
  return (
    <>
      <Banner title={"Service Advisories"} />
      <Breadcrumb paths={[
        { name: "Home", url: "/" },
        { name: "Service Advisories", url: "/serviceadvisories" },
      ]} />

      <Container className="px-4 pb-5">
        <Row className="mx-4">
          <Col xs={12} className="mt-3">
            <h3 className="header2">Emergency Water Service Interruption Schedule</h3>
            <Paragraph descript="While Maynilad makes every effort to provide its customers with continuous water service, some external factors (e.g., pipe breakages caused by road construction accidents) may lead to an emergency water service interruption in some areas. We apologize for any inconvenience caused by such unplanned service disruptions. Visit this page to know if your area is affected, and when to expect service resumption." />
          </Col>
          <Col xs={12} className="mt-3">
            <MyTable />
          </Col>

          <Col xs={12} className="mt-4 pt-4">
            <h3 className="header2">Scheduled Water Service Interruptions</h3>
            <Paragraph descript="Maynilad continuously conducts preventive maintenance activities and pipe installations, among others, to improve and expand the water infrastructure and thus sustain good service levels for its customers. To allow the implementation of these activities however, water service must sometimes be interrupted or water pressure is reduced. Visit this page to check on water service advisories in your area." />
          </Col>
          <Col xs={12} className="mt-3 mb-5 pb-5">
            <MyTable />
          </Col>
        </Row>
      </Container>

    </>
  );
};

export default ServiceAdvisories;