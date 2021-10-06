import { BrowserRouter as Router, Switch, Route, 
  Link} from 'react-router-dom';
import Login from './login/login';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Home" exact>
          <h1>Home</h1>
        </Route>
        <Route path="/" exact>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
