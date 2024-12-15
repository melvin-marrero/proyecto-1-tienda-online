import "../hojasDestilo/panelAdmin.css"
import { Link } from "react-router-dom"
import Animatione from "./animation"
import Panelmenu from "./adminMenu"
import { useNavigate } from "react-router-dom";

export default function PanelAdmin(){
    const navigate = useNavigate()
    const handleLogout = () => {
        // Elimina el token del localStorage
        localStorage.removeItem("token");
        
        // Redirige al usuario a la página de inicio de sesión
        navigate("/admin");
      };
    return (
    <>
    <div className="conten">
        <Panelmenu /> 
        <div id="content">
            <nav class="navbar navbar-expand  shadow">
                <h1 className="h1-activid">actividades</h1>  
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown no-arrow mx-1">
                        <Link class="nav-link dropdown-toggle" to={""} id="alertsDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <iconify-icon icon="mdi:bell-outline"></iconify-icon>
                                
                            <span class="badge badge-danger badge-counter">3+</span>
                        </Link>
                            
                            <div class="dropdown-list dropdown-menu shadow animated--grow-in"
                                aria-labelledby="alertsDropdown">
                                <h6 class="dropdown-header">
                                    notificaciones
                                </h6>
                                <Link class="dropdown-item text-center " to={""}>mostral toda</Link>
                            </div>
                        </li>

                        
                        <li class="nav-item dropdown no-arrow mx-1">
                            <Link class="nav-link dropdown-toggle" to={""} id="messagesDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <iconify-icon icon="mdi:email-alert-outline"></iconify-icon>
                                
                                <span class="badge badge-danger badge-counter">7</span>
                            </Link>
                            
                            <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="messagesDropdown">
                                <h6 class="dropdown-header">
                                    Mensajes
                                </h6>
                                <Link class="dropdown-item text-center " to={""}>leer Mas Mensajes</Link>
                            </div>
                        </li>

                        <div class="topbar-divider"></div>

                        
                        <li class="nav-item dropdown no-arrow">
                            <Link class="dropdown-toggle" to={""} id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="text-gray-600">adminitrador</span>
                                <div className="cont-icon-perf">
                                   <iconify-icon icon="mdi:account"></iconify-icon>
                                </div>
                            </Link>
                            
                            <div class="dropdown-menu"aria-labelledby="userDropdown">
                                <Link class="dropdown-item" to={""} data-toggle="modal" data-target="#logoutModal">
                                   <i class="bi-cerra bi-fast-forward-btn"></i>
                                    <button className="btn-salir"
                                    onClick={handleLogout}>salir</button>
                                </Link>
                            </div>
                        </li>

                    </ul>
               </nav>
               <div className="container-fluid">
                    <div class="contain-panel-repote">
                        <h1 class="h1-panel">panel</h1>
                        <Link to={""} class="link-report">
                          <iconify-icon icon="material-symbols:download-2-outline"></iconify-icon> 
                           General Reporte
                        </Link>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                ventas (Mensuales)
                                            </div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">$000</div>
                                        </div>
                                        <div class="col-auto">
                                           <iconify-icon icon="material-symbols:edit-calendar"></iconify-icon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-gren shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center anual">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                ventas (Anual)</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">$000</div>
                                        </div>
                                        <div class="col-auto">
                                            <iconify-icon icon="bitcoin-icons:linux-terminal-filled"></iconify-icon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-warning shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                Pedidos pendientes
                                            </div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">0</div>
                                        </div>
                                        <div class="col-auto">
                                        <iconify-icon icon="zondicons:conversation"></iconify-icon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-yellow shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center completado">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                Pedidos completado
                                            </div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">0</div>
                                        </div>
                                        <div class="col-auto">
                                        <iconify-icon icon="zondicons:checkmark-outline"></iconify-icon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-12 mb-4 animation">
                         <Animatione />
                        </div>
                    </div>
               </div>
              
            </div>

        </div>
        
    </>
    )

}