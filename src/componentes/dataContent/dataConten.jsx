import { createContext ,useState } from "react";


export const dataContent = createContext();

const DataProvide = ( { children } )=>{
    const [usuario,setUsuario]=useState(null)
    const [carrito,setCarrito]=useState(JSON.parse(localStorage.getItem("carrito"))||[]);
     
    function addProducto(product){
      const productRepeact=carrito.find((item)=> item._id ===product._id);
      if(productRepeact){
        setCarrito(carrito.map((item)=>item._id===product._id?{...product,cantida:productRepeact.cantida + 1 } :item));
         
      } else {setCarrito([...carrito,product]);}
      
    }

  return <dataContent.Provider value={{carrito,setCarrito,addProducto,usuario,setUsuario}}> {children} </dataContent.Provider>   
}
export default DataProvide;

  



