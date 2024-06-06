import menu from "../imagenes/menu.png"
import "../hojasDestilo/menu.css"
import MarrerosoftwareCompanys from "../imagenes/MarrerosoftwareCompanys.png"
import BotonDesplegables from "./boton-desplegable"
import BotonDesplegablesAccesory from "./boton-desplegables-accesori"
import CantidaProduct from "./cantidaProduct"
import ItemCart from "./itemCart"
import { useContext } from "react";
import { dataContent } from "./dataContent/dataConten";
import { Link } from "react-router-dom"
import Carrusel from "./carrusel";


export default function Menu(){
    const { carrito }=useContext(dataContent);
    function mostralCarrito(){
    const addclase = document.querySelector(".item-componet");
    addclase.classList.toggle("ocultar");

    }
    return (
    <>
    <Carrusel />
    
        <nav class="navbar navbar-expand-sm navbar-light">
            <div class="container-fluid menu">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-Toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <img src={menu} alt="menu" className="icon-menu"/>
                </button>

                <div className="contenedor-icon">
                    <Link to={"/inicioSeccion"}><i class="bi bi-person-circle"></i></Link>
                    <div className="container-carrito">
                       {carrito.length >0?<div className="numero"><CantidaProduct /></div>:null}
                       <i class="bi-2 bi-cart-fill" onClick={mostralCarrito}></i>   
                    </div>
                </div>

                <div class="collapse navbar-collapse" id="navbar-Toggler">
                    <Link class="navbar-brand" to={"/"}><img src={MarrerosoftwareCompanys} className="logo" alt="logo" /></Link>
                    <div className="contenedor-menu">
                        <ul class="navbar-nav">
                           <li class="nav-item">
                              <Link class="nav-link" aria-disabled="true" to={"/"}>inicio</Link>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link" aria-current="page" href="#"><BotonDesplegables /></a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#"><BotonDesplegablesAccesory /></a>
                           </li>
                           <li class="nav-item">
                               <Link class="nav-link" aria-disabled="true" href="#">variado</Link>
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