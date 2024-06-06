import './App.css';
import ContainerAccesoryIphone from './componentes/carpetaProducto/containerAccesoryIphone';
import ContainerAccesorySansung from './componentes/carpetaProducto/containerAccesorySansung';
import ContainerAccesoyXiaomi from './componentes/carpetaProducto/containerAccesoyXiaomi';
import ContainerSansung from './componentes/carpetaProducto/containerSansung';
import Iphonee from './componentes/carpetaProducto/iphonee';

import ContainerXiaomi from './componentes/carpetaProducto/containerXiaomi';
import DataProvide from './componentes/dataContent/dataConten';
import Home from './componentes/home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import InicioSeccion from './componentes/inicioSeccion';
import Register from './componentes/register';
import ContainerIphoneUsuario from './appUsuario/containerIphoneUsuario';
import ContainerSansungUsuario from './appUsuario/containerSansungUsuario';
import ContainerXiaomiUsuario from './appUsuario/containerXiaomiUsuario';
import ContainerAccesoryIphoneUsuario from './appUsuario/containerAcesoryIphoneUsuario';
import ContainerAccesorySansungUsuario from './appUsuario/containerAcesorySansungUsuario';
import ContainerAccesoryXioamiUsuario from './appUsuario/containerAcesoryXiaomiUsuario';
import HomeUsuario from './appUsuario/homeUsuario';






function App() {
  
  return (
    <div className="App">
    <DataProvide> 
       <BrowserRouter> 
          <Routes>   
             <Route path='/' element={<Home /> }/>
             <Route path='/miTienda' element={<HomeUsuario /> }/>
             <Route path='/iphone' element={<Iphonee /> }/>
             <Route path='/sansung' element={<ContainerSansung /> }/>
             <Route path='/xiaomi' element={<ContainerXiaomi /> }/>
             <Route path='/paraIphone' element={<ContainerAccesoryIphone /> }/>
             <Route path='/paraSansung' element={<ContainerAccesorySansung /> }/>
             <Route path='/paraXiaomi' element={<ContainerAccesoyXiaomi /> }/>
             <Route path='/inicioSeccion' element={<InicioSeccion /> }/>
             <Route path='/register' element={<Register /> }/>
             <Route path='/iphones' element={<ContainerIphoneUsuario /> }/>
             <Route path='/sansungs' element={<ContainerSansungUsuario /> }/>
             <Route path='/xiaomis' element={<ContainerXiaomiUsuario /> }/>
             <Route path='/paraIphones' element={<ContainerAccesoryIphoneUsuario /> }/>
             <Route path='/paraSansungs' element={<ContainerAccesorySansungUsuario /> }/>
             <Route path='/paraXiaomis' element={<ContainerAccesoryXioamiUsuario /> }/>
          </Routes> 
        </BrowserRouter>
    </DataProvide>  
    </div>
    
  );
}

export default App;
