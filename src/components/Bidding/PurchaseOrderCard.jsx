import Card from 'react-bootstrap/Card';
import Image from '../../static/img/donor.png';
import '../../static/css/biddingcard.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import output from '../../pdf/PurchaseOrder/output.pdf';
import output1 from '../../pdf/PurchaseOrder/output1.pdf';
import output2 from '../../pdf/PurchaseOrder/output2.pdf';
import output3 from '../../pdf/PurchaseOrder/output3.pdf';
import output4 from '../../pdf/PurchaseOrder/output4.pdf';
import output5 from '../../pdf/PurchaseOrder/output5.pdf';
import output6 from '../../pdf/PurchaseOrder/output6.pdf';
import output7 from '../../pdf/PurchaseOrder/output7.pdf';

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
                <Col>
                <div className='container p-4 py-5'>
                <Card className='biddingcard py-4'>
                    <Card.Img variant="top" src={Image} className="bidding-border-image" />
                </Card>
                <ButtonWAS mylink= {output6} name="READ MORE..." />
                </div> </Col>
                <Col>
                <div className='container p-4 py-5'>
                <Card className='biddingcard py-4'>
                    <Card.Img variant="top" src={Image} className="bidding-border-image" />
                </Card>
                <ButtonWAS mylink= {output7} name="READ MORE..." />
                </div> </Col>
            </Row>
        </div>
    );
}

export default Biddingcard;