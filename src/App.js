import { BrowserRouter as Router, Switch, Route, 
  Link} from 'react-router-dom';
import Login from './login/login';
import TablaUsuarios from './Usuario-roles/Tabla-usuarios/TablaUsuarios';
import HeaderComponent from './shared/components/header/HeaderComponent';
import FooterComponent from './shared/components/footer/FooterComponent';
import './App.css';
import Home from './Home/Home';
import Ventas from './Ventas/Ventas';
import InformeVentas from './InformeVentas/InformeVentas';
import ProductosPage from './productos/ProductosPage';
import ListadoProductos from './productos/ListadoProductosPage';


function App() {
  return (
    <Router>
      
      <Switch>
        <Route path="/home/:correo" exact>
          <HeaderComponent/>
          <Home /> 
          <FooterComponent/>
        </Route>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/Ventas/:correo" exact>
          <HeaderComponent/>
          <Ventas />
          <FooterComponent/>
        </Route>
        <Route path="/InformeVentas/:correo" exact>    
          <HeaderComponent/>      
          <InformeVentas/>
          <FooterComponent/>
        </Route>
        <Route path="/Productos/:correo" exact>
          <HeaderComponent/>
          <ProductosPage/>
          <FooterComponent/>
        </Route>
        <Route path="/ListadoProductos/:correo" exact>    
          <HeaderComponent/>      
          <ListadoProductos/>
          <FooterComponent/>
        </Route>
        <Route path="/Usuarios/:correo" exact>
          <HeaderComponent/>
          <TablaUsuarios/>
          <FooterComponent/>
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
