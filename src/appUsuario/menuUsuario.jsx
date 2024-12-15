
import { Link } from "react-router-dom"
import CantidaProduct from "../componentes/cantidaProduct";
import ItemCart from "../componentes/itemCart";
import { useContext } from "react";
import { dataContent } from "../componentes/dataContent/dataConten";
import Carrusel from "../componentes/carrusel";
import BotonDesplegableUsuario from "./botonDesplegableUsuario";
import BotonDesplegablesAccesoryUsuaraio from "./botonDesplegablesAccesoryUsuario";
import BotonUsuario from "./botonUsuario";
import "../hojasDestilo/menuUsuario.css";


export default function MenuUsuario({correoUsuario}){
    const { carrito }=useContext(dataContent);
    function mostralCarrito(){
    const addclase = document.querySelector(".item-componet");
    addclase.classList.toggle("ocultar");

    }
    return (
    <>
    <Carrusel />
    
        <nav class="navbar bg-light navbar-expand-md navbar-light">
            <div className="container-fluid menu-usu">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-Toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                  <i class="bi-menu bi-list"></i>
                </button>

                <div className="contenedor-icon2">
                   <div className="container-email">
                     <p className="p-email-usu">{correoUsuario}</p>   
                    </div>
                        <div className="container-all2">
                           <BotonUsuario />
                           <div className="container-carrito2">
                              {carrito.length >0?<div className="numero2"><CantidaProduct/></div>:null}
                              <i class="bi-2 bi-cart-fill" onClick={mostralCarrito}></i>
                           </div>
                       </div>
                    
                </div>
            </div>

            <div class="collapse navbar-collapse" id="navbar-Toggler">
                    <div className="contenedor-menu">
                        <ul class="navbar-nav navbar-nav-usu">
                           <li class="nav-item">
                               <Link class="nav-link" aria-disabled="true" to={"/miTienda"}>inicio</Link>
                           </li>
                           <li class="nav-item-usu">
                              <a class="nav-link" aria-current="page" href="#"><BotonDesplegableUsuario /></a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#"><BotonDesplegablesAccesoryUsuaraio /></a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link" aria-disabled="true" href="#">variado</a>
                           </li>
                        </ul>
                    </div>      
                
            </div>
        </nav>

    
    <div className="item-componet ocultar">
      <ItemCart />
    </div>
   </>
    )
}