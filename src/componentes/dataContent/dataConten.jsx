import { createContext ,useState } from "react";


export const dataContent = createContext();

const DataProvide = ( { children } )=>{
     const [usuario,setUsuario]=useState(null)
     const [carrito,setCarrito]=useState(JSON.parse(localStorage.getItem("carrito"))||[]);
     
     function addProducto(product){
      const productRepeact=carrito.find((item)=> item.id ===product.id);
      if(productRepeact){
        setCarrito(carrito.map((item)=>item.id===product.id?{...product,cantida:productRepeact.
          cantida + 1 } :item));
         
      }else{setCarrito([...carrito,product]);
      
        localStor()
      }
      
    }

    return <dataContent.Provider value={{carrito,setCarrito,addProducto,usuario,setUsuario,localStor}}> {children} </dataContent.Provider>
    function localStor(){
      localStorage.setItem("carrito",JSON.stringify(carrito))
    }     
}
export default DataProvide;

  



