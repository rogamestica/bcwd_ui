import React, { useState } from 'react';

import noimg from '../../static/img/no-image.png';
import Table from '../../components/Table';

const PersonalInfo = () => {
    // Simulated anonymous personal information
    const imageUrl = noimg;

    return (
      <div style={{ textAlign: "left", marginLeft: "30px", fontSize: "50px" }}>
        <h2>Personal Information</h2>
        {imageUrl && <img src={imageUrl} alt="Customer" style={{ width: '200px', height: '200px' }} />}
        <Table />
      </div>
    );
  };

export default PersonalInfo;