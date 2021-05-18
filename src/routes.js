import React from 'react';

import DashBoard from './components/DashBoard/DashBoard'
import TablePrLine from './components/ProductLine/TablePrLine'

const routes = [
    // { path: '/home', name: 'Home', exact: true },
    { path: '/home/dashboard', name: 'DashBoard', exact: false, main: ()=> <DashBoard /> },
    { path: '/home/proline-table', name: 'Table Product Line', exact: false, main: ()=> <TablePrLine /> },
]

export default routes;
