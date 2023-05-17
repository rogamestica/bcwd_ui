import Banner from "../../components/Banner";
import { Container, Row, Col } from "react-bootstrap";
import Breadcrumb from "../../components/Breadcrumb";
import Paragraph from '../../components/Paragraph';
import Table from 'react-bootstrap/Table';
import Header3 from "../../components/Header3";
import LabTable from "../../components/LabTable";
import lab_doh from '../../static/img/lab_doh.jpg';
import Pagination from '../../components/Pagination';

const WaterQualityResult = () => {
  const indiv_param = [
    // individual parameter data
  ];

  const other_test = [
    // other test data
  ];

  return (
    <>
      <Banner title={"Water Quality Result"} />
      <Breadcrumb paths={[
        { name: "Home", url: "/" },
        { name: "Water Quality Result", url: "/waterqualityresult" },
      ]} />

      <Container className="px-4 pb-5">
        <Row className="mx-4">
          <Col xs={12} className="mt-3">
            <h3 className="header2">Rates Effectivity: Feb. 8, 2021</h3>
            <Paragraph descript="BCWD Water passed the quality standards set by Philippine National Standards for Drinking Water (PNSDW). Results of regular bacteriological, physical and chemical analyses assure consumers that the water being distributed by Butuan City Water District (BCWD) is clean, safe and potable." />
          </Col>

          <Col xs={12} className="mt-3">
            <Paragraph descript="BCWD had long set-up its own state-of-the-art laboratory facilities and equipment manned by licensed chemist and laboratory technician. This water testing laboratory is a duly Department of Health (DOH) accredited laboratory for physical, chemical and biological analyses." />
          </Col>

          <Row className="my-5">
            <Col xs={12} className="mt-3 text-center">
              <img src={lab_doh} className="img-fluid" alt="DOH Laboratory" style={{ width: '80%', height: '100%'}} />
            </Col>
          </Row>
          <Col xs={12} className="mt-3">
            <Header3 header="Laboratory Charges" />

            <Row>
              <Col xs={12} className="my-3">
                <h3 className="header2">Bacteriological Analysis Charges</h3>
                <Table striped bordered>
                  {/* table contents */}
                </Table>
              </Col>
            </Row>

            <Row>
              <Col xs={12} className="mt-3">
                <h3 className="header2">Physical and Chemical Analysis</h3>
                <Table striped bordered>
                  {/* table contents */}
                </Table>
              </Col>
            </Row>

            <Row>
              <Col xs={12} className="mt-3">
                <h3 className="header2">Individual Parameter</h3>
                <LabTable datas={indiv_param} column1="Parameter" column2="Cost Per Sample" />
              </Col>
            </Row>

            <Row className="pb-5 mb-5">
              <Col xs={12} className="mt-3">
                <h3 className="header2">PNSDW 2017 Required Tests And Other Test Parameters</h3>
                <LabTable datas={other_test} column1="Test" column2="Method" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Pagination />
    </>
  );
};

export default WaterQualityResult;
