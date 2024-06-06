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
          <div className="container item-1" key={product.id}>
                <img src={product.img} alt="img-prod-cart" className="img-product-car"/>
                <div className="info-product">
                 <p className="nombre">{product.nombre}</p>
                 <p className="description">{product.descripcio}</p>
                </div>
                <div>
                  <ContadorCatindaProuct product={product} />
                  <p className="remover" onClick={()=>deleteProduct(product.id)}><u>eliminar</u></p>
                </div>
                <p className="precio-car">${new Intl.NumberFormat().format(product.precio*product.cantida)}</p>
          </div>
        )
    });
    
}

