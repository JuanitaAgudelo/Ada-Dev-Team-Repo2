import { BrowserRouter as Router, Switch, Route, 
  Link} from 'react-router-dom';
import HeaderComponent from './shared/components/header/HeaderComponent';
import FooterComponent from './shared/components/footer/FooterComponent';
import BarraBusqueda from './Usuario-roles/Barra-busqueda/BarraBusqueda';
import TablaUsuarios from './Usuario-roles/Tabla-usuarios/TablaUsuarios';
import ProductosPage from './productos/ProductosPage';
import ListadoProductosPage from './productos/ListadoProductosPage';
function App() {
  return (
    <Router>
      <HeaderComponent/>
      <Switch>
        <Route path="/Home" exact>
          <h1>Home</h1>
        </Route>
        <Route path="/Ventas" exact>
          <h1>Ventas</h1>         
          
        </Route>
        <Route path="/Productos" exact>          
          <ProductosPage></ProductosPage>
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
