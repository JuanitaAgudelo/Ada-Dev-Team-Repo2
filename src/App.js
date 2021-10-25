import { BrowserRouter as Router, Switch, Route, 
  Link} from 'react-router-dom';
import Login from './login/login';
import TablaUsuarios from './Usuario-roles/Tabla-usuarios/TablaUsuarios';
import HeaderComponent from './shared/components/header/HeaderComponent';
import FooterComponent from './shared/components/footer/FooterComponent';
import Home from './Home/Home';
import Ventas from './Ventas/Ventas';
import InformeVentas from './InformeVentas/InformeVentas';


function App() {
  return (
    <Router>
      
      <Switch>
        <Route path="/home" exact>
          <HeaderComponent/>
          <Home /> 
          <FooterComponent/>
        </Route>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/Ventas" exact>
          <HeaderComponent/>
          <Ventas />
          <FooterComponent/>
        </Route>
        <Route path="/Productos" exact>
          <HeaderComponent/>
          <InformeVentas/>
          <FooterComponent/>
        </Route>
        <Route path="/Usuarios" exact>
          <HeaderComponent/>
          <TablaUsuarios/>
          <FooterComponent/>
        </Route>
      </Switch>
      
    </Router>
  );
}
export default App;
