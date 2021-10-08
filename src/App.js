import { BrowserRouter as Router, Switch, Route, 
  Link} from 'react-router-dom';
import HeaderComponent from './shared/components/header/HeaderComponent';
import FooterComponent from './shared/components/footer/FooterComponent';
import BarraBusqueda from './Usuario-roles/Barra-busqueda/BarraBusqueda';
import TablaUsuarios from './Usuario-roles/Tabla-usuarios/TablaUsuarios';
import InformeVentas from "./InformeVentas/InformeVentas";
import ProductosPage from './productos/ProductosPage';
import ListadoProductosPage from './productos/ListadoProductosPage';
import Ventas from './Ventas/Ventas';

function App() {
  return (
    <Router>
      <HeaderComponent/>
      <Switch>
        <Route path="/" exact>
          <h1>PAGINA PRINCIPAL</h1>
        </Route>
        <Route path="/InformeVentas" exact>
          <InformeVentas></InformeVentas>
        </Route>
        <Route path="/Ventas" exact>
          <Link to="/InformeVentas" className="btn btn-primary">Consultar Ventas</Link>
          <Ventas></Ventas>
        </Route>
        <Route path="/Productos" exact>          
          <ProductosPage></ProductosPage>
        </Route>
        <Route path="/ListadoProductos" exact>          
          <ListadoProductosPage></ListadoProductosPage>
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
