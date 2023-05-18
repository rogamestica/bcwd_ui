import Table from 'react-bootstrap/Table';

const MyTable = () => {
  return (
    <Table striped bordered hover style={{ fontFamily: 'Roboto Light' }}>
      <thead>
        <tr>
          <th style={{ fontSize: '13px' }}>City</th>
          <th colSpan={2} style={{ fontSize: '13px' }}>Barangay</th>
          <th colSpan={3} style={{ fontSize: '13px' }}>Specific Area</th>
          <th style={{ fontSize: '13px' }}>From</th>
          <th style={{ fontSize: '13px' }}>To</th>
          <th style={{ fontSize: '13px' }}>Time</th>
          <th colSpan={2} style={{ fontSize: '13px' }}>Reason</th>
        </tr>
      </thead>
      <tbody>
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
  );
}

export default MyTable;
