import Card from 'react-bootstrap/Card';
import Image from '../../static/img/donor.png';
import '../../static/css/biddingcard.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import output from '../../pdf/RequestforQuotation/output.pdf';
import output1 from '../../pdf/RequestforQuotation/output1.pdf';
import output2 from '../../pdf/RequestforQuotation/output2.pdf';
import output3 from '../../pdf/RequestforQuotation/output3.pdf';
import output4 from '../../pdf/RequestforQuotation/output4.pdf';
import output5 from '../../pdf/RequestforQuotation/output5.pdf';

// // components
// import Paragraph from './Paragraph';
import ButtonWAS from '../ButtonWAS';

const Biddingcard = () => {
    return (
        <div>
             <Row >
                <Col>
                <div className='container p-4 py-5'>
                    <Card className='biddingcard py-4'>
                        <Card.Img variant="top" src={Image} className="bidding-border-image" />
                    </Card>
                    <ButtonWAS mylink= {output} name="READ MORE..." />
                </div> </Col>
                <Col>
                <div className='container p-4 py-5'>
                <Card className='biddingcard py-4'>
                    <Card.Img variant="top" src={Image} className="bidding-border-image" />
                </Card>
                <ButtonWAS mylink= {output1} name="READ MORE..." />
                </div> </Col>
                <Col>
                <div className='container p-4 py-5'>
                <Card className='biddingcard py-4'>
                    <Card.Img variant="top" src={Image} className="bidding-border-image" />
                </Card>
                <ButtonWAS mylink= {output2} name="READ MORE..." />
                </div> </Col>
                <Col>
                <div className='container p-4 py-5'>
                <Card className='biddingcard py-4'>
                    <Card.Img variant="top" src={Image} className="bidding-border-image" />
                </Card>
                <ButtonWAS mylink= {output3} name="READ MORE..." />
                </div> </Col>
                <Col>
                <div className='container p-4 py-5'>
                <Card className='biddingcard py-4'>
                    <Card.Img variant="top" src={Image} className="bidding-border-image" />
                </Card>
                <ButtonWAS mylink= {output4} name="READ MORE..." />
                </div> </Col>
                <Col>
                <div className='container p-4 py-5'>
                <Card className='biddingcard py-4'>
                    <Card.Img variant="top" src={Image} className="bidding-border-image" />
                </Card>
                <ButtonWAS mylink= {output5} name="READ MORE..." />
                </div> </Col>
            </Row>
        </div>
    );
}

export default Biddingcard;