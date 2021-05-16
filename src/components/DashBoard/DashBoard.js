import React from 'react';
import './DashBoard.css';
import TeamChart from './TeamChart';
import CompanyChart from './CompanyChart';

const DashBoard = () => {
    
  return(
    <div className='dash-board'>
      <div>
        <h1 className='label'>KPI của đơn vị HCI 07</h1>
        <CompanyChart/>
        <h1 className='label'>KPI của đơn vị HCI 07</h1>
        <TeamChart/>
      </div>
    </div>
  );
};

export default DashBoard;