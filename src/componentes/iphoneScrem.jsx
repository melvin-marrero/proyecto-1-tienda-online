import { useParams,useNavigate } from "react-router-dom"
import { iphones } from "../containerProduct/iphones"
import "../hojasDestilo/productoScrem.css"
import { useContext } from "react";
import { dataContent } from "./dataContent/dataConten";


export default function IphoneScrem() {
  const {addProducto}=useContext(dataContent);
  const back = useNavigate();
  const {nombre} = useParams();
  const product = iphones.find((x) => x.nombre === nombre);
  return (
    <>
        <div className="card item-screm">
            <button className="btn-back" onClick={() => back(-1)}>back to shopping</button>
            <div className="row g-0">
                <div className="col-md-6 col-sm-12">
                    <img src={product.img} alt="img" className="img-product" />
                    <button className="btn-add" 
                     onClick={()=>addProducto(product)}>
                      agregar al carrito <i class="bi bi-cart4"></i>
                    </button>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="card-body">
                      <h4 className="nonScrem">{product.nombre}:</h4>
                      <p className="dispo">{product.cantidaDisponible === 0 ? "producto no disponible":null}</p>
                      <p className="descripcio">{product.descripcio}.</p>
                      <p className="precio">${new Intl.NumberFormat().format(product.precio)}</p>
                    </div>
                    
                </div>
            </div>
            
        </div>
      </>
  )
}
