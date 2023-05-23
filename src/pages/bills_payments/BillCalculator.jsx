import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import Banner from "../../components/Banner";
import Breadcrumb from "../../components/Breadcrumb";

const WaterBillCalculator = () => {
  useEffect(() => {
    const robotoLight = new FontFace(
      'Roboto Light',
      `url(${require('../../static/roboto-font/Roboto-Light.ttf')}) format('truetype')`
    );

    robotoLight
      .load()
      .then((font) => {
        document.fonts.add(font);
        document.body.style.fontFamily = 'Roboto Light';
      })
      .catch((error) => {
        console.error('Failed to load font:', error);
      });
  }, []);



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
          <Col md={6} className="text-left mb-4" >
            <h3 style={{marginBotton: "100px", fontFamily: 'Roboto', fontWeight: 'bold', marginLeft: '20px '}}>Step-by-Step Instructions:</h3>
            <ol>
              <li style={{margin: '10px', fontFamily: 'Roboto Light', fontSize: '18px'}}>Look at your water bill consumption.</li>
              <li style={{margin: '10px', fontFamily: 'Roboto Light', fontSize: '18px'}}>Enter your consumption.</li>
              <li style={{margin: '10px', fontFamily: 'Roboto Light', fontSize: '18px'}}>Click the calculate button to get your total bill.</li>
              <li style={{margin: '10px', fontFamily: 'Roboto Light', fontSize: '18px'}}>If chosen to pay online, look for Bill Payment Partners to see the payment method.</li>
              <li style={{margin: '10px', fontFamily: 'Roboto Light', fontSize: '18px'}}>You can also pay at the nearest paying agency in your town.</li>
            </ol>
          </Col>
          <Col md={6} className="text-left">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formUnit">
                <Form.Label style={{marginBotton: "100px", fontFamily: 'Roboto', fontWeight: 'bold', fontSize: '35px'}}>Unit of measurement</Form.Label>
                <div>
                  <Form.Check
                    type="radio"
                    label="Cubic Meter"
                    value="cubic_meter"
                    onChange={handleUnitChange}
                    checked={cubicMeter}
                  />
                </div>
              </Form.Group>
              <Form.Group controlId="formConsumption">
                <Form.Label style={{margin: '10px', fontFamily: 'Roboto Light', fontSize: '20px'}}>Consumption</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter your consumption"
                  step={cubicMeter ? 1 : 10}
                  value={consumption}
                  onChange={handleChange}
                  style={{margin: '10px', fontFamily: 'Roboto Light', fontSize: '20px'}}
                />
                {cubicMeter ? (
                  <Form.Text className="text-muted" style={{margin: '10px', fontFamily: 'Roboto Light', fontSize: '20px'}}>* 1 cubic meter = 35 gallons</Form.Text>
                ) : (
                  <Form.Text className="text-muted" style={{margin: '10px', fontFamily: 'Roboto Light', fontSize: '20px'}}> * Consumption is in gallons</Form.Text>
                )}
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3" style={{margin: '10px', fontFamily: 'Roboto Light', fontSize: '20px'}}>
                Calculate
              </Button>
            </Form>
            {totalAmount > 0 && (
              <Alert variant="success" className="mt-4" style={{margin: '10px', fontFamily: 'Roboto Light', fontSize: '20px'}}>
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
