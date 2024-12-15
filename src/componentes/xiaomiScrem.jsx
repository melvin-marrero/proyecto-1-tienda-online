import { useContext } from "react";
import { dataContent } from "./dataContent/dataConten";
import { useParams,useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
export default function XiaomiScrem() {
  const {addProducto}=useContext(dataContent);
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const back = useNavigate();
  const {nombre} = useParams();
  const product =productos.find((x) => x.nombre === nombre);

  useEffect(() => {
    const fetchProductos = async () => {
        try {
            const response = await fetch('https://bask-end-tiend-online.onrender.com/api/xiaomi'); // Ajusta la URL según tu configuración
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
      <>
          <div className="card item-screm">
              <button className="btn-back" onClick={() => back(-1)}>back to shopping</button>
              <div className="row g-0">
                  <div className="col-md-6 col-sm-12">
                      <img src={product.image} alt="img" className="img-product" />
                      <button className="btn-add" 
                       onClick={()=>addProducto(product)}>
                        agregar al carrito <i class="bi bi-cart4"></i>
                      </button>
                  </div>
                  <div className="col-md-6 col-sm-12">
                      <div className="card-body">
                        <h4 className="nonScrem">{product.nombre}:</h4>
                        <p className="descripcio">{product.descri}.</p>
                        <p className="precio">${new Intl.NumberFormat().format(product.precio)}</p>
                      </div>
                      
                  </div>
              </div>
              
          </div>
        </>
    )
  }