import { useEffect } from "react"
import { useState } from "react"
import  axios  from "axios"
import { useContext } from "react"
import { dataContent } from "../dataContent/dataConten"

export default function ParaSansung () {
  const {addProducto}=useContext(dataContent);
  const [data,setData]=useState([]);
  useEffect(()=>{
    axios("para-sansung.json").then((res)=> setData(res.data));
  },[]);
  return data.map((product)=>{
    return (
      <div className="container" key={product.id}>
        <div className="product-1">
          <img src={product.img} alt="img-product" className="img-product" />
          <div className="info-product">
            <h4>{product.nombre}</h4>
            <p>{product.descripcio}</p>
            <p className="precio">${new Intl.NumberFormat().format(product.precio)}</p>
            <button className="btn-add" onClick={()=>addProducto(product)}>
              comprar
            </button>
          </div>
        </div>
      </div>
    )
  })
}
