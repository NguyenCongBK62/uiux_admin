import React from 'react';

import TablePrLine from './components/ProductLine/TablePrLine'

const routes = [
    { path: '/home/proline-table', name: 'Table Product Line', exact: false, main: ()=> <TablePrLine /> },
]

export default routes;
