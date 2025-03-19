
import "../hojasDestilo/menu.css"
import fabiconTienda from "../imagenes/fabiconTienda.webp"
import BotonDesplegables from "./boton-desplegable"
import CantidaProduct from "./cantidaProduct"
import ItemCart from "./itemCart"
import { useContext } from "react";
import { dataContent } from "./dataContent/dataConten";
import { Link } from "react-router-dom"



export default function Menu(){
    const { carrito }=useContext(dataContent);
    function mostralCarrito(){
    const addclase = document.querySelector(".item-componet");
    addclase.classList.toggle("ocultar");

    }
    return (
    <>
    
        <nav class="navbar bg-light navbar-prin navbar-expand-md  navbar-light">
            <div class="container-fluid menu">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-Toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                  <i class="bi-menu bi-list"></i>
                </button>

                <div className="contenedor-icon">
                    <Link to={"/inicioSeccion"}><i class="bi bi-person-circle"></i></Link>
                    <div className="container-carrito">
                       {carrito.length >0?<div className="numero"><CantidaProduct /></div>:null}
                       <i class="bi-2 bi-cart-fill" onClick={mostralCarrito}></i>
                        
                    </div>
                </div>

                <div class="collapse navbar-collapse" id="navbar-Toggler">
                    <div className="cont-logo">
                      <Link class="navbar-brand" to={"/"}><img src={fabiconTienda} className="logo" alt="logo" /></Link>
                      <p className="p-logo"> GigaTech__</p><p className="p-logo2">Store</p>
                    </div>
                    <div className="contenedor-menu">
                        <ul class="navbar-nav">
                           <li class="nav-item">
                              <Link class="nav-link" aria-disabled="true" to={"/"}>inicio</Link>
                           </li>
                           <li class="nav-item">
                              <h6 class="nav-link" aria-current="page"><BotonDesplegables /></h6>
                          </li>
                          
                           <li class="nav-item">
                               <Link class="nav-link" aria-disabled="true" to={"/variados"}>variado</Link>
                           </li>
                        </ul>
                    </div>      
                </div>
            </div>
        </nav>

    
    <div className="item-componet ocultar">
      <ItemCart />
    </div>
   </>
    )
}