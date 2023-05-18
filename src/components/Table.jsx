import Table from 'react-bootstrap/Table';

const MyTable = () => {
  return (
    <Table striped bordered hover responsive>
      <tbody>
        <tr>
          <td><strong>Name:</strong></td>
          <td>John Doe</td>
        </tr>
        <tr>
          <td><strong>Address:</strong></td>
          <td>123 Main St</td>
        </tr>
        <tr>
          <td><strong>Contact:</strong></td>
          <td>555-1234</td>
        </tr>
        <tr>
          <td><strong>Date Installed:</strong></td>
          <td>12/12/2020</td>
        </tr>
        <tr>
          <td><strong>Account Number:</strong></td>
          <td>1234345678</td>
        </tr>
        <tr>
          <td><strong>Status:</strong></td>
          <td>good</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default MyTable;
