import './App.css';

import { Breadcrumb } from 'antd';
import CommandWork from './components/CommandWork/CommandWork';
import TablePrLine from './components/ProductLine/TablePrLine';
import DashBoard from './components/DashBoard/DashBoard';
import CommandDetail from './components/CommandDetail/CommandDetail';
import KPIGroup from './components/KPI/KPIGroup/KPIGroup';
import KPIProductLine from './components/KPI/KPIProductLine';
import KPICustoms from './components/KPI/KPICustoms';
import PersonTable from './components/Person/Table';
import PersonSignup from './components/Person/Signup';
import ProductLineDetail from './components/ProductLineDetail/ProductLineDetail';

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
          <Route path='/commanddetail'>
            <Breadcrumb style={{float: 'left', marginLeft: '55px', marginTop: '1rem'}}>
              <Breadcrumb.Item>Admin</Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/commanddetail">Chi tiết lệnh sản xuất</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
            <CommandDetail/>
          </Route>
          <Route path='/productlinedetail'>
            <Breadcrumb style={{float: 'left', marginLeft: '55px', marginTop: '1rem'}}>
              <Breadcrumb.Item>Admin</Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/productlinedetail">Chi tiết tiến độ chuyền</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
            <ProductLineDetail/>
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
          <Route path='/person-table'>
            <Breadcrumb style={{float: 'left', marginLeft: '55px', marginTop: '1rem'}}>
              <Breadcrumb.Item>
                <Link to="/">Admin</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                Bảng quản lý nhân viên
              </Breadcrumb.Item>
            </Breadcrumb>
            <PersonTable />
          </Route>
          <Route path='/person-signup'>
            <Breadcrumb style={{float: 'left', marginLeft: '55px', marginTop: '1rem'}}>
              <Breadcrumb.Item>
                <Link to="/">Admin</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                Đăng ký nhân viên
              </Breadcrumb.Item>
            </Breadcrumb>
            <PersonSignup />
          </Route>
        </Switch>
      </div>
  );
}

export default App;
