import Table from 'react-bootstrap/Table';
import React from 'react';

const Accountnumber = () => {
    const accountnumber = "1234345678";
    const name = "John Doe";

    return (
      <>
      <div >
        <h2 style={{fontSize: "30px", fontFamily: "Roboto", color: 'black', marginTop: '100px'}}> Account Information</h2>
        <p style={{fontSize: "20px", fontFamily: "Roboto-Light", color: 'black'}}>Account Number: {accountnumber}</p>
        <p style={{fontSize: "20px", fontFamily: "Roboto-Light", color: 'black'}}>Account Name: {name}</p>
      </div>
      <Table striped bordered>
        <thead>
          <tr>
            <th colSpan={2} style={{ color: 'blue' }}>
            <td>DESCRIPTION</td>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Amount per mtr</td>
            <td>Php 20</td>
          </tr>
          <tr>
            <td>Consumption</td>
            <td>60.5 cu.m.</td>
          </tr>
          <tr>
            <td>Charges</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>Total Amount</td>
            <td>Php 1 210</td>
          </tr>
        </tbody>
      </Table>
      </>
    )
  }

export default Accountnumber;