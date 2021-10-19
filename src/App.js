import { BrowserRouter as Router, Switch, Route, 
  Link} from 'react-router-dom';
import Login from './login/login';
import './App.css';
// import Home from './home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" exact>
          {/* <Home /> */}
        </Route>
        <Route path="/" exact>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
