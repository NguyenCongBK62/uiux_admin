import './App.css';
import { 
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import routes from './routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {
            routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              )
            })
          }
          <Redirect from="/" to="/home/dashboard" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
