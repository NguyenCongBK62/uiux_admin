import './App.css';
import DashBoard from './components/DashBoard/DashBoard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import routes from './routes';

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
    <Router>
      <Switch>
        <Route exact path='/'>
          <DashBoard/>
        </Route>
        {showRoute(routes)}
      </Switch>
    </Router>
    </div>
  );
}

export default App;
