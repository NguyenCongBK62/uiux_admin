import './App.css';
import DashBoard from './components/DashBoard/DashBoard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path='/'>
          <DashBoard/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
