import './App.css';
import DashBoard from './components/DashBoard/DashBoard';
import routes from './routes';

import { Breadcrumb } from 'antd';
import CommandWork from './components/CommandWork/CommandWork';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {

  const showRoute = (routes) => {
    let results = null;
    if (routes.length > 0) {
      results = routes.map((route, index) => {
          return <Route 
            exact={route.exact}
            path={route.path}
            component={route.main}
            key={index}
          />
        })
    }

    return results;
  }

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
        </Switch>
      </div>
  );
}

export default App;
