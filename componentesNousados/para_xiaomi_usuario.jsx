
import { useContext } from "react"
import { dataContent } from "../src/componentes/dataContent/dataConten"
import DefaulLayoutUsuario from "../src/appUsuario/defaulLayoutUsuario"
import { Link } from "react-router-dom"
import { useState,useEffect } from "react"

export default function ParaXiaomiUsuario() {
  const { addProducto }=useContext(dataContent);
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductos = async () => {
          try {
            const response = await fetch('https://bask-end-tiend-online.onrender.com/api/xiaomiAcesory'); // Ajusta la URL según tu configuración
            if (!response.ok) {
                throw new Error('Error al obtener productos');
            }
            const data = await response.json();
            setProductos(data);
          } catch (error) {
            setError(error.message);
          } finally {
             setLoading(false);
        }
       };

       fetchProductos();
      }, []);

      if (loading) return <div>Cargando...</div>;
      if (error) return <div>Error: {error}</div>;
    return (
      <DefaulLayoutUsuario>
      <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-4 row-cols-sm-12">
        {productos.map((item)=>{
          return (
            <div key={item._id} className="product-1">
              <Link to={`${item.nombre}`}><img src={item.image} alt="img-product" className="img-product" /></Link>
              <div className="info-product">
                <h4>{item.nombre}</h4>
                <p className="descrp">{item.descri}</p>
                <p className="odp">${new Intl.NumberFormat().format(item.precio)}</p>
                <button className="btn-add" onClick={()=>addProducto(item)}>
                   comprar <i class="bi bi-cart4"></i>
                </button>
              </div>
            </div>
            )
          })}
        </div>
      </div>
      </DefaulLayoutUsuario>
    ) 
}