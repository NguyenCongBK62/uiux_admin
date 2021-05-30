import './App.css';

import { Breadcrumb } from 'antd';
import CommandWork from './components/CommandWork/CommandWork';
import TablePrLine from './components/ProductLine/TablePrLine';
import DashBoard from './components/DashBoard/DashBoard';
import KPIGroup from './components/KPI/KPIGroup/KPIGroup';
import KPIProductLine from './components/KPI/KPIProductLine';
import KPICustoms from './components/KPI/KPICustoms';

import {
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {

  return (
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Breadcrumb style={{float: 'left', marginLeft: '55px', marginTop: '1rem'}}>
              <Breadcrumb.Item>Admin</Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/">DashBoard</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
            <DashBoard/>
          </Route>
          <Route path='/commandwork'>
            <Breadcrumb style={{float: 'left', marginLeft: '55px', marginTop: '1rem'}}>
              <Breadcrumb.Item>Admin</Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/commandwork">Lệnh sản xuất</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
            <CommandWork/>
          </Route>
          <Route path='/proline-table'>
            <Breadcrumb style={{float: 'left', marginLeft: '55px', marginTop: '1rem'}}>
              <Breadcrumb.Item>
                <Link to="/">Admin</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                Dây chuyền sản xuất
              </Breadcrumb.Item>
            </Breadcrumb>
            <TablePrLine />
          </Route>
          <Route path='/kpi_group'>
            <Breadcrumb style={{float: 'left', marginLeft: '55px', marginTop: '1rem'}}>
              <Breadcrumb.Item>
                <Link to="/">Admin</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                KPI Tổ Chức
              </Breadcrumb.Item>
            </Breadcrumb>
            {/* Chỗ này là component */}
            <KPIGroup />
          </Route>
          <Route path='/kpi_customer'>
            <Breadcrumb style={{float: 'left', marginLeft: '55px', marginTop: '1rem'}}>
              <Breadcrumb.Item>
                <Link to="/">Admin</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                KPI Cá Nhân
              </Breadcrumb.Item>
            </Breadcrumb>
            {/* Chỗ này là component */}
            <KPICustoms />
          </Route>
          <Route path='/kpi_prline'>
            <Breadcrumb style={{float: 'left', marginLeft: '55px', marginTop: '1rem'}}>
              <Breadcrumb.Item>
                <Link to="/">Admin</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                KPI Chuyền
              </Breadcrumb.Item>
            </Breadcrumb>
            {/* Chỗ này là component */}
            <KPIProductLine />
          </Route>
        </Switch>
      </div>
  );
}

export default App;
