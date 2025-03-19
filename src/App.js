import './App.css';
import DataProvide from './componentes/dataContent/dataConten';
import Home from './componentes/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InicioSeccion from './componentes/inicioSeccion';
import Register from './componentes/register';
import Iphone from './componentes/carpetaProducto/iphone';
import Sansung from './componentes/carpetaProducto/sansung';
import Xiaomi from './componentes/carpetaProducto/xiaomi';
import ParaIphone from './componentes/carpetaProducto/paraIphone';
import SansungUsuario from './appUsuario/sansungUsuario';
import XiaomiUsuario from './appUsuario/xiaomiUsuario';
import ParaIphoneUsuario from './appUsuario/para_Iphone_usuario';
import AppUsuario from './appUsuario/appusuario';
import IphoneScrem from './componentes/iphoneScrem';
import MainScrem from './componentes/mainScrem';
import SansungScrem from './componentes/sansungScrem';
import XiaomiScrem from './componentes/xiaomiScrem';
import IphoneAccesoryScrem from './componentes/iphoneAccesoryScrem';
import PanelAdmin from './adminitrador/panelAdmin';
import IphoneAdmin from './adminitrador/iphoneAdmin';
import SansungAdmin from './adminitrador/sansungAdmin';
import XiaomiAdmin from './adminitrador/xiaomiAdmin';
import IphonAcesoryAdmin from './adminitrador/iphoAcesoryAdmin';
import MasBuscadoAdmin from './adminitrador/masBuscadoAdmin';

// Importa el componente ProtectedRoute
import ProtectedRoute from './adminitrador/rutaProtegida';
import Admin from './componentes/admin';
import IphonetUsuario from './appUsuario/iphoneUsuario';

function App() {
  return (
    <div className="App">
      <DataProvide>
        <BrowserRouter>
          <Routes>
            {/* Rutas públicas */}
            <Route path="/admin" element={<Admin />} />
            <Route path="/" element={<Home />} />
            <Route path="/:nombre" element={<MainScrem />} />
            <Route path="/miTienda" element={<AppUsuario />} />
            <Route path="/celulares" element={<Iphone />} />
            <Route path="/celulares/:nombre" element={<IphoneScrem />} />
            <Route path="/accesorios" element={<Sansung />} />
            <Route path="/accesorios/:nombre" element={<SansungScrem />} />
            <Route path="/audios" element={<Xiaomi />} />
            <Route path="/audios/:nombre" element={<XiaomiScrem />} />
            <Route path="/variados" element={<ParaIphone />} />
            <Route path="/variados/:nombre" element={<IphoneAccesoryScrem />} />
            <Route path="/inicioSeccion" element={<InicioSeccion />} />
            <Route path="/inicioSeccion/:nombre" element={<MainScrem />} />
            <Route path="/register" element={<Register />} />
            <Route path="/celularess" element={<IphonetUsuario />} />
            <Route path="/celularess/:nombre" element={<IphoneScrem />} />
            <Route path="/accesorioss" element={<SansungUsuario />} />
            <Route path="/accesorioss/:nombre" element={<SansungScrem />} />
            <Route path="/audioss" element={<XiaomiUsuario />} />
            <Route path="/audioss/:nombre" element={<XiaomiScrem />} />
            <Route path="/variadoss" element={<ParaIphoneUsuario />} />
            <Route path="/variadoss/:nombre" element={<IphoneAccesoryScrem />} />
            
            
            {/* Rutas protegidas */}
            <Route 
              path="/panelAdmin" 
              element={
                <ProtectedRoute>
                  <PanelAdmin />
                </ProtectedRoute>
              }
            />
            <Route 
              path="/celularesAdmin" 
              element={
                <ProtectedRoute>
                  <IphoneAdmin />
                </ProtectedRoute>
              }
            />
            <Route 
              path="/accesoriosAdmin" 
              element={
                <ProtectedRoute>
                  <SansungAdmin />
                </ProtectedRoute>
              }
            />
            <Route 
              path="/audiosAdmin" 
              element={
                <ProtectedRoute>
                  <XiaomiAdmin />
                </ProtectedRoute>
              }
            />
            <Route 
              path="/variadosAdmin" 
              element={
                <ProtectedRoute>
                  <IphonAcesoryAdmin />
                </ProtectedRoute>
              }
            />
            
            <Route 
              path="/masBuscado" 
              element={
                <ProtectedRoute>
                  <MasBuscadoAdmin />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </DataProvide>
    </div>
  );
}

export default App;
