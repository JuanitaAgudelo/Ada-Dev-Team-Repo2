import { BrowserRouter as Router, Switch, Route, 
  Link} from 'react-router-dom';
import HeaderComponent from './shared/components/header/HeaderComponent';
import FooterComponent from './shared/components/footer/FooterComponent';
import BarraBusqueda from './Usuario-roles/Barra-busqueda/BarraBusqueda';
import TablaUsuarios from './Usuario-roles/Tabla-usuarios/TablaUsuarios';
import InformeVentas from "./InformeVentas/InformeVentas";
function App() {
  return (
    <Router>
      <HeaderComponent/>
      <Switch>
        <Route path="/" exact>
          <h1>Home</h1>
        </Route>
        <Route path="/InformeVentas" exact>
          <InformeVentas></InformeVentas>
        </Route>
        <Route path="/Ventas" exact>
          <h1>Ventas</h1>
          <Link to="/InformeVentas" className="btn btn-primary">Consultar Ventas</Link>
        </Route>
        <Route path="/Productos" exact>
          <h1>Productos</h1>
        </Route>
        <Route path="/Usuarios" exact>
          <BarraBusqueda/>
          <TablaUsuarios/>
        </Route>
      </Switch>
      <FooterComponent/>
    </Router>
  );
}

export default App;
