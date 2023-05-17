import Card from 'react-bootstrap/Card';
import Image from '../../static/img/donor.png';
import '../../static/css/biddingcard.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import output from '../../pdf/Notification/output.pdf';


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
            </Row>
        </div>
    );
}

export default Biddingcard;