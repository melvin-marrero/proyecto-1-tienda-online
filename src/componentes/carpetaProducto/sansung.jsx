
import { useContext } from "react";
import { dataContent } from "../dataContent/dataConten";
import DefaulLayaout from "../layoaut/defaulLayaout";
import { sansung } from "../../containerProduct/sansung";
import { Link } from "react-router-dom";

export default function Sansung() {
  const {addProducto}=useContext(dataContent);
 return (
  <DefaulLayaout>
  <div className="container-fluid">
  <div className="row row-cols-1 row-cols-md-4 row-cols-sm-12">
    {sansung.map((item)=>{
      return (
        <div key={item.id} className="product-1">
         <Link to={`${item.nombre}`}> <img src={item.img} alt="img-product" className="img-product" /></Link>
          <div className="info-product">
            <h4>{item.nombre}</h4>
            <p className="descrp">{item.descripcio}</p>
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
  </DefaulLayaout>
) 
}
