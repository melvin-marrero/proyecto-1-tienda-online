import { useContext } from "react";
import { dataContent } from "./dataContent/dataConten";

export default function ContadorCatindaProuct( { product } ) {
    const { carrito,setCarrito,addProducto,localStor}=useContext(dataContent);
    function remove(){
    const productRepeact = carrito.find((item)=> item.id ===product.id);
      productRepeact.cantida !== 1 &&
      setCarrito(carrito.map((item)=>item.id===product.id?{...product,cantida:productRepeact.
        cantida -1 }:item)); 
        localStor()
    }
  return (
    <div className="container-btn-contador">
      <p className="btn-cantida" onClick={()=>remove(product)}>-</p>
        <p className="cantida">{product.cantida}</p>
      <p className="btn-cantida" onClick={()=>addProducto(product)}>+</p>
    </div>
  )
}
