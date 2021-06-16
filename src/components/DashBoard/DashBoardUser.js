import React from 'react';

import './DashBoard.css';
import UserChart from './UserChart';
import TableUser from './TableUser';

const DashBoardUser = () => {
    return (
        <div className='dash-board' style={{marginTop: `5rem`}}>
            <div>
                <h1 className='label-company'>KPI theo giờ</h1>
                <UserChart />
            </div>
            <div className="table">
                <TableUser />
            </div>
        </div>
    );
}

export default DashBoardUser;
