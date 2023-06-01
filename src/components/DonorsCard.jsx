import Card from 'react-bootstrap/Card';
import ButtonWAS from './ButtonWAS';
import Image from '../static/img/donor.png';

const DonorsCard = () => {
  return (
    <div className='container p-4 py-5'>
      <Card className='donorscard' style={{ padding: 0 }}>
        <Card.Img
          variant="top"
          src={Image}
          className="bidding-border-image"
          style={{ width: '100%', height: '100%', objectFit: 'cover', outline: 'transparent' }}
        />
        {/* Add any other content or Card components here */}
      </Card>
      <div  style={{marginTop: '20px'}}>
      <ButtonWAS mylink='#' name='READ MORE...'/>
      </div>
    </div>
  );
};

export default DonorsCard;
