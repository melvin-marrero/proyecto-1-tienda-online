import tienda7 from "../imagenes/tienda7.jpg"
import tienda1 from "../imagenes/tienda1.png"
import tienda5 from "../imagenes/tienda5.jpg"
import tienda6 from "../imagenes/tienda6.webp"
import "../hojasDestilo/header.css"
export default function Header(){
    return (
    <>
    <img src={tienda7} className="imagen" alt="img"/>
    <div className="container-fluid contenedor-carrusel">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={tienda1} alt="img" class="d-block w-100" />
                </div>
                <div class="carousel-item">
                   <img src={tienda6} alt="img" class="d-block w-100" />
                </div>
                <div class="carousel-item">
                    <img src={tienda5} alt="img" class="d-block w-100" />
                </div>
            </div>
        </div>
    </div>
    </>
    )
}