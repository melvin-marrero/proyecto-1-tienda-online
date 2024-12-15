import { useContext } from "react";
import { dataContent } from "./dataContent/dataConten";
import ContadorCatindaProuct from "./contadorCatindaProuct";

export default function ProductoCarrito(){
    const { carrito,setCarrito,localStor }=useContext(dataContent);
    function deleteProduct(id){
       const identId=carrito.find((item) => item.id === id);
       const newCarrito=carrito.filter((item)=>{
        return item !== identId;
       });
       setCarrito(newCarrito)
       localStor()
    }

    return carrito.map((product)=>{
        return (
          <div key={product.id}>
            <table className="producto-table">
                <thead>
                  <tr>
                      <th>Imagen</th>
                      <th>producto</th>
                      <th>Descripción</th>
                      <th>cantida</th>
                      <th>precio</th>
                      <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> <img src={product.image} alt="img-prod-cart" className="img-product-car"/></td>
                    <td><p className="nombre">{product.nombre}</p></td>
                    <td><p className="description">{product.descri}</p></td>
                    <td><ContadorCatindaProuct product={product} /></td>
                    <td><p className="precio-car">${new Intl.NumberFormat().format(product.precio*product.cantida)}</p></td>
                    <td><p className="remover" onClick={()=>deleteProduct(product.id)}><u>eliminar</u></p></td>
                  </tr>
                </tbody>
             
              </table>
          </div>
        )
    });
    
}

