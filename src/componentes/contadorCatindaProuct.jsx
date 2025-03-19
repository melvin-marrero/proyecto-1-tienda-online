import { useContext } from "react";
import { dataContent } from "./dataContent/dataConten";

export default function ContadorCatindaProuct( { product } ) {
    const {setCarrito,addProducto}=useContext(dataContent);
    function remove() {
      setCarrito((prevCarrito) => {
        return prevCarrito.map((item) =>
          item._id === product._id // 🔥 Asegurarnos de usar _id correctamente
            ? { ...item, cantida: Math.max(1, item.cantida - 1) }
            : { ...item }
        );
      });
    }
    
  return (
    <div className="container-btn-contador">
      <p className="btn-cantida" onClick={()=>remove(product)}>-</p>
        <p className="cantida">{product.cantida}</p>
      <p className="btn-cantida" onClick={()=>addProducto(product)}>+</p>
    </div>
  )
}
