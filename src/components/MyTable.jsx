import Table from 'react-bootstrap/Table';


const MyTable = () => {
  return (
    <div className="table-responsive">
    <Table striped bordered hover style={{ fontFamily: 'Roboto Light' }}>
      <thead>
        <tr>
          <th style={{fontFamily: 'Roboto-regular', fontSize: '20px'}}>City</th>
          <th colSpan={2} style={{fontFamily: 'Roboto-regular', fontSize: '20px'}}>Barangay</th>
          <th colSpan={3} style={{fontFamily: 'Roboto-regular', fontSize: '20px'}}>Specific Area</th>
          <th style={{fontFamily: 'Roboto-regular', fontSize: '20px'}}>From</th>
          <th style={{fontFamily: 'Roboto-regular', fontSize: '20px'}}>To</th>
          <th style={{fontFamily: 'Roboto-regular', fontSize: '20px'}}>Time</th>
          <th colSpan={2} style={{fontFamily: 'Roboto-regular', fontSize: '20px'}}>Reason</th>
        </tr>
      </thead>
      <tbody >
        <tr >
          <td >Quezon City</td>
          <td colSpan={2}>Brgys. Greater Lagro, Kaligayahan, Pasong Putik and San Agustin</td>
          <td colSpan={3}>Lamesa Pumping Station</td>
          <td>August 29, 2023</td>
          <td>August 30, 2023</td>
          <td>10:00 PM to 10:00 AM</td>
          <td colSpan={2}>Power Interruption</td>
        </tr>
        <tr>
          <td>Quezon City</td>
          <td colSpan={2}>Brgys. Greater Lagro, Kaligayahan, Pasong Putik and San Agustin</td>
          <td colSpan={3}>Lamesa Pumping Station</td>
          <td>August 29, 2023</td>
          <td>August 30, 2023</td>
          <td>10:00 PM to 10:00 AM</td>
          <td colSpan={2}>Power Interruption</td>
        </tr>
        <tr>
          <td>Quezon City</td>
          <td colSpan={2}>Brgys. Greater Lagro, Kaligayahan, Pasong Putik and San Agustin</td>
          <td colSpan={3}>Lamesa Pumping Station</td>
          <td>August 29, 2023</td>
          <td>August 30, 2023</td>
          <td>10:00 PM to 10:00 AM</td>
          <td colSpan={2}>Power Interruption</td>
        </tr>
        <tr>
          <td>Quezon City</td>
          <td colSpan={2}>Brgys. Greater Lagro, Kaligayahan, Pasong Putik and San Agustin</td>
          <td colSpan={3}>Lamesa Pumping Station</td>
          <td>August 29, 2023</td>
          <td>August 30, 2023</td>
          <td>10:00 PM to 10:00 AM</td>
          <td colSpan={2}>Power Interruption</td>
        </tr>
        <tr>
          <td>Quezon City</td>
          <td colSpan={2}>Brgys. Greater Lagro, Kaligayahan, Pasong Putik and San Agustin</td>
          <td colSpan={3}>Lamesa Pumping Station</td>
          <td>August 29, 2023</td>
          <td>August 30, 2023</td>
          <td>10:00 PM to 10:00 AM</td>
          <td colSpan={2}>Power Interruption</td>
        </tr>
        <tr>
          <td>Quezon City</td>
          <td colSpan={2}>Brgys. Greater Lagro, Kaligayahan, Pasong Putik and San Agustin</td>
          <td colSpan={3}>Lamesa Pumping Station</td>
          <td>August 29, 2023</td>
          <td>August 30, 2023</td>
          <td>10:00 PM to 10:00 AM</td>
          <td colSpan={2}>Power Interruption</td>
        </tr>
        {/* Other rows */}
      </tbody>
    </Table>
    </div>
  );
}

export default MyTable;
