import Card from 'react-bootstrap/Card';
import Image from '../../static/img/donor.png';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import output from '../../pdf/Invitation/output.pdf';
import output1 from '../../pdf/Invitation/output1.pdf';
import output2 from '../../pdf/Invitation/output2.pdf';
import output3 from '../../pdf/Invitation/output3.pdf';
import output4 from '../../pdf/Invitation/output4.pdf';
import output5 from '../../pdf/Invitation/output5.pdf';
import output6 from '../../pdf/Invitation/output6.pdf';

// // components
// import Paragraph from './Paragraph';
import ButtonWAS from '../ButtonWAS';

const Biddingcard = () => {
    return (
        <div>
               <Row style={{ margin: '0 -15px', paddingLeft: '0', paddingRight: '0' }} noGutters>
                <Col >
                <div className='container p-4 py-5'>
                    <Card className='biddingcard py-4' >
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
            </Row>
        </div>
    );
}

export default Biddingcard;