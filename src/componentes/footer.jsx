
import "../hojasDestilo/footer.css"
import React from "react";


const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-column">
            
            <ul>
              <li><a href="#">Directorio de Tiendas</a></li>
              <li><a href="#">Carreras</a></li>
              <li><a href="#">Nuestra Compañía</a></li>
            </ul>
          </div>

          <div className="footer-column">
            
            <ul>
              <li><a href="#">Ayuda</a></li>
              <li><a href="#">Retiro de Productos</a></li>
              <li><a href="#">Accesibilidad</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <ul>
              <li><a href="#">Términos de Uso</a></li>
              <li><a href="#">Privacidad & Seguridad</a></li>
              <li><a href="#">Aviso en la Recolección</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <ul>
              <li><a href="#">Tus Opciones de Privacidad</a></li>
              <li><a href="#">Hoja de Datos de Seguridad</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Gigatech Store - Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
