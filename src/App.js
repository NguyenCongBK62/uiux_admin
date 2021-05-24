import './App.css';

import { Breadcrumb } from 'antd';
import CommandWork from './components/CommandWork/CommandWork';
import TablePrLine from './components/ProductLine/TablePrLine';
import DashBoard from './components/DashBoard/DashBoard';

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
        </Switch>
      </div>
  );
}

export default App;
