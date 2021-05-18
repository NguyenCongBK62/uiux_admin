import React from 'react';
import './DashBoard.css';
import TeamChart from './CompanyChart';
import CompanyChart from './TeamChart';

// import TeamChart from './TeamChart';
// import CompanyChart from './CompanyChart';

const DashBoard = () => {
    
  return(
    <div className='dash-board'>
      <h1 style={{fontSize: '30px', textAlign: 'left', paddingLeft: '55px', marginBottom: '2rem'}}>Dash board KPI đơn vị</h1>
      <div>
        <h1 className='label-company'>KPI đơn vị theo giờ</h1>
        <CompanyChart/>
        <h1 className='label-team'>KPI các đơn vị theo tháng</h1>
        <TeamChart/>
      </div>
    </div>
  );
};

export default DashBoard;