import Table from 'react-bootstrap/Table';
import React, { useEffect } from 'react';

const MyTable = () => {

  useEffect(() => {
    const loadFonts = async () => {
      try {
        const robotoRegular = new FontFace(
          'Roboto-regular',
          `url(${require('../static/roboto-font/Roboto-Regular.ttf')}) format('truetype')`
        );
        await robotoRegular.load();
        document.fonts.add(robotoRegular);

        const robotoLight = new FontFace(
          'Roboto-light',
          `url(${require('../static/roboto-font/Roboto-Light.ttf')}) format('truetype')`
        );
        await robotoLight.load();
        document.fonts.add(robotoLight);

        document.body.style.fontFamily = 'Roboto-regular, Roboto-light';
      } catch (error) {
        console.error('Failed to load font:', error);
      }
    };

    loadFonts();
  }, []);

  return (
    <Table striped bordered hover responsive  >
      <tbody>
        <tr >
          <td style={{fontFamily: 'Roboto-regular', fontSize: '20px'}}><strong>Month</strong></td>
          <td style={{fontFamily: 'Roboto-regular', fontSize: '20px'}}><strong>Amount/cu.mtr</strong></td>
          <td style={{fontFamily: 'Roboto-regular', fontSize: '20px'}}><strong>Cubic Metre Consumption</strong></td>
          <td style={{fontFamily: 'Roboto-regular', fontSize: '20px'}}><strong>Extra Charges</strong></td>
          <td style={{fontFamily: 'Roboto-regular', fontSize: '20px'}}><strong> Total Amount</strong></td>
          <td style={{fontFamily: 'Roboto-regular', fontSize: '20px'}}><strong>isPayed</strong></td>
        </tr>
        <tr >
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>January</td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>Php 20</td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>60.5 cu.m. </td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>N/A</td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>Php 1 210</td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>True</td>
        </tr>
        <tr >
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>January</td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>Php 20</td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>60.5 cu. mtr. </td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>N/A</td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>Php 1 210</td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>True</td>
        </tr>
        <tr >
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>January</td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>Php 20</td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>60.5 cu. mtr. </td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>N/A</td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>Php 1 210</td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>True</td>
        </tr>
        <tr >
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>January</td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>Php 20</td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>60.5 cu. mtr. </td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>N/A</td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>Php 1 210</td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>True</td>
        </tr>
        <tr >
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>January</td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>Php 20</td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>60.5 cu. mtr. </td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>N/A</td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>Php 1 210</td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>True</td>
        </tr>
        <tr >
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>January</td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>Php 20</td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>60.5 cu. mtr. </td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>N/A</td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>Php 1 210</td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>True</td>
        </tr>
        <tr >
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>January</td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>Php 20</td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>60.5 cu. mtr. </td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>N/A</td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>Php 1 210</td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>True</td>
        </tr>
        <tr >
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>January</td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>Php 20</td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>60.5 cu. mtr. </td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>N/A</td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>Php 1 210</td>
          <td style={{fontFamily: 'Roboto-light', fontSize: '20px'}}>True</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default MyTable;
