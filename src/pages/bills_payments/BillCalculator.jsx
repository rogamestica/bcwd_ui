import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import Banner from "../../components/Banner";
import Breadcrumb from "../../components/Breadcrumb";

const WaterBillCalculator = () => {
  const [consumption, setConsumption] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [cubicMeter, setCubicMeter] = useState(true);

  const handleChange = (event) => {
    setConsumption(parseFloat(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let total = 0;
    if (cubicMeter) {
      total = consumption * 35;
    } else {
      if (consumption <= 1000) {
        total = 100;
      } else if (consumption <= 2000) {
        total = (consumption - 1000) * 0.2 + 100;
      } else if (consumption <= 3000) {
        total = (consumption - 2000) * 0.25 + 300;
      } else if (consumption <= 5000) {
        total = (consumption - 3000) * 0.3 + 550;
      } else {
        total = (consumption - 5000) * 0.35 + 1300;
      }
    }
    setTotalAmount(total);
  };

  const handleUnitChange = (event) => {
    setCubicMeter(event.target.value === "cubic_meter");
  };

  return (
    <>
      <Banner title={"Water Bill Calculator"} />

      <Container className="mt-4">
      <Breadcrumb
          paths={[
            { name: "Home", url: "/" },
            { name: "Bill Calculator", url: "/billcalculator" },
          ]}
        />
        <Row>
          <Col md={4}>
            <h3>Step-by-Step Instructions:</h3>
            <ol>
              <li>Look at you water bill consumption.</li>
              <li>Enter your consumption.</li>
              <li>Click the calculate button to get your total bill.</li>
              <li>IF CHOOSEN TO PAY ONLINE. Look for Bill Payment Partners to see Payment Method.</li>
              <li>Or you can also pay at the nearest paying agency in your town.</li>
            </ol>
          </Col>
          <Col md={8}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formUnit">
                <Form.Label>Unit of measurement</Form.Label>
                <div>
                  <Form.Check type="radio" label="Cubic Meter" value="cubic_meter" onChange={handleUnitChange} checked={cubicMeter} />
                </div>
              </Form.Group>
              <Form.Group controlId="formConsumption">
                <Form.Label>Consumption</Form.Label>
                <Form.Control type="number" placeholder="Enter your consumption" step={cubicMeter ? 1 : 10} value={consumption} onChange={handleChange} />
                {cubicMeter ? <Form.Text className="text-muted">* 1 cubic meter = 35 gallons</Form.Text> : <Form.Text className="text-muted">* Consumption is in gallons</Form.Text>}
              </Form.Group>
              <Button variant="primary" type="submit">
                Calculate
              </Button>
            </Form>
            {totalAmount > 0 && (
              <Alert variant="success" className="mt-4">
                Your total bill is Php {totalAmount.toFixed(2)}
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WaterBillCalculator;
