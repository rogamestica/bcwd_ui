import Table from 'react-bootstrap/Table';

const MyTable = () => {
  return (
    <Table striped bordered hover responsive >
      <tbody>
        <tr >
          <td style={{fontFamily: 'Roboto-regular', fontSize: '20px'}}><strong>Name:</strong></td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>John Doe</td>
        </tr>
        <tr>
          <td style={{fontFamily: 'Roboto-regular', fontSize: '20px'}}><strong>Address:</strong></td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>123 Main St</td>
        </tr>
        <tr>
          <td style={{fontFamily: 'Roboto-regular', fontSize: '20px'}}><strong>Contact:</strong></td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>555-1234</td>
        </tr>
        <tr>
          <td style={{fontFamily: 'Roboto-regular', fontSize: '20px'}}><strong>Date Installed:</strong></td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>12/12/2020</td>
        </tr>
        <tr>
          <td style={{fontFamily: 'Roboto-regular', fontSize: '20px'}}><strong>Account Number:</strong></td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>1234345678</td>
        </tr>
        <tr>
          <td style={{fontFamily: 'Roboto-regular', fontSize: '20px'}}><strong>Status:</strong></td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>Good</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default MyTable;
