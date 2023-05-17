import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

// components
import Paragraph from './Paragraph';
import ButtonWAS from './ButtonWAS';

import image from '../static/img/no-image.png';

function Cards() {
  return (
    <Card className='m-5 myborder'  >
      <Image variant="top" src={image} className="border-image" fluid />
      <Card.Body className='p-3 m-3 mb-5 pb-5'>
        <Card.Title className='pt-2'>
          <div className="element-class-news">
            <h3 className="myheader-news pt-2 text-lg">DAILY WATER SERVICE INTERRUPTION ADVISORY STARTING MARCH 28</h3>
          </div>
        </Card.Title>
        <div className='pb-3'>
          <span className='fw-normal text-secondary date'>March 27, 2023</span>
        </div>
        <Card.Text className='py-2'>
          <Paragraph className="paragraph-news" descript="Maynilad has been monitoring the water level in Angat Dam, which supplies 90% of the raw water supply for the West Zone. While the elevation is still at a healthy…" />
        </Card.Text>
        <ButtonWAS mylink="#" name="READ MORE..." />
      </Card.Body>
    </Card>
  );
}

export default Cards;
