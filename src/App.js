import './App.css';
import DataProvide from './componentes/dataContent/dataConten';
import Home from './componentes/home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import InicioSeccion from './componentes/inicioSeccion';
import Register from './componentes/register';
import Iphone from './componentes/carpetaProducto/iphone';
import Sansung from './componentes/carpetaProducto/sansung';
import Xiaomi from './componentes/carpetaProducto/xiaomi';
import ParaIphone from './componentes/carpetaProducto/paraIphone';
import ParaSansung from './componentes/carpetaProducto/paraSansung';
import ParaXiaomi from './componentes/carpetaProducto/paraXiaomi';
import IphoneUsuario from './appUsuario/iphoneUsuario';
import SansungUsuario from './appUsuario/sansungUsuario';
import XiaomiUsuario from './appUsuario/xiaomiUsuario';
import ParaIphoneUsuario from './appUsuario/para_Iphone_usuario';
import ParaSansungUsuario from './appUsuario/para_sansung_usuario';
import ParaXiaomiUsuario from './appUsuario/para_xiaomi_usuario';
import AppUsuario from './appUsuario/appusuario';
import IphoneScrem from './componentes/iphoneScrem';
import MainScrem from './componentes/mainScrem';
import SansungScrem from './componentes/sansungScrem';
import XiaomiScrem from './componentes/xiaomiScrem';
import IphoneAccesoryScrem from './componentes/iphoneAccesoryScrem';
import SansungAccesoryScrem from './componentes/sansungAccesoryScrem';
import XiaomiAccesoryScrem from './componentes/xiaomiAccesoryScrem';






function App() {
  
  return (
    <div className="App">
    <DataProvide> 
       <BrowserRouter> 
          <Routes>   
             <Route path='/' element={<Home /> }/>
             <Route path='/:nombre' element={<MainScrem /> }/>
             <Route path='/miTienda' element={<AppUsuario /> }/>
             <Route path='/iphone' element={<Iphone/> }/>
             <Route path='/iphone/:nombre' element={<IphoneScrem /> }/>
             <Route path='/sansung' element={<Sansung /> }/>
             <Route path='/sansung/:nombre' element={<SansungScrem /> }/>
             <Route path='/xiaomi' element={<Xiaomi /> }/>
             <Route path='/xiaomi/:nombre' element={<XiaomiScrem /> }/>
             <Route path='/paraIphone' element={<ParaIphone /> }/>
             <Route path='/paraIphone/:nombre' element={<IphoneAccesoryScrem /> }/>
             <Route path='/paraSansung' element={<ParaSansung /> }/>
             <Route path='/paraSansung/:nombre' element={<SansungAccesoryScrem /> }/>
             <Route path='/paraXiaomi' element={<ParaXiaomi /> }/>
             <Route path='/paraXiaomi/:nombre' element={<XiaomiAccesoryScrem /> }/>
             <Route path='/inicioSeccion' element={<InicioSeccion /> }/>
             <Route path='/inicioSeccion/:nombre' element={<MainScrem /> }/>
             <Route path='/register' element={<Register /> }/>
             <Route path='/iphones' element={<IphoneUsuario /> }/>
             <Route path='/iphones/:nombre' element={<IphoneScrem /> }/>
             <Route path='/sansungs' element={<SansungUsuario /> }/>
             <Route path='/sansungs/:nombre' element={<SansungScrem /> }/>
             <Route path='/xiaomis' element={<XiaomiUsuario /> }/>
             <Route path='/xiaomis/:nombre' element={<XiaomiScrem /> }/>
             <Route path='/paraIphones' element={<ParaIphoneUsuario /> }/>
             <Route path='/paraIphones/:nombre' element={<IphoneAccesoryScrem /> }/>
             <Route path='/paraSansungs' element={<ParaSansungUsuario /> }/>
             <Route path='/paraSansungs/:nombre' element={<SansungAccesoryScrem /> }/>
             <Route path='/paraXiaomis' element={<ParaXiaomiUsuario /> }/>
             <Route path='/paraXiaomis/:nombre' element={<XiaomiAccesoryScrem /> }/>
          </Routes> 
        </BrowserRouter>
    </DataProvide>  
    </div>
    
  );
}

export default App;
