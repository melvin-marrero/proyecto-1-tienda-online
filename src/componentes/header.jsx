import React, { useEffect, useState } from "react";
import tienda7 from "../imagenes/tienda7.jpg";
import tienda1 from "../imagenes/tienda1.png";
import tienda5 from "../imagenes/tienda5.jpg";
import tienda6 from "../imagenes/tienda6.webp";
import "../hojasDestilo/header.css";

export default function Header() {
  const [texto, setTexto] = useState("Bienvenidos a ");
const mensaje = "...";

useEffect(() => {
  let index = 0;
  const intervalId = setInterval(() => {
    setTexto((prev) => prev + mensaje.charAt(index));
    index++;
    if (index >= mensaje.length) {
      clearInterval(intervalId);
    }
  }, 200);

  return () => clearInterval(intervalId);
}, []);
 // Solo se ejecuta una vez, al montar el componente

  return (
    <>
    <div className="contenedor-texto">
      <img src={tienda7} className="imagen" alt="img" />
      
      <div className="texto-escrito">
        {texto} <span className="p-logo-c">GigaTech__</span>
        <span className="p-logo2-c">Store</span>
      </div>
    </div>
      
      
    <div className="container-fluid contenedor-carrusel">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={tienda1} alt="img" className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src={tienda6} alt="img" className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src={tienda5} alt="img" className="d-block w-100" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}














