import { createContext,useEffect,useState } from "react";
import  axios  from "axios";

export const dataContent = createContext();

const DataProvide = ( { children } )=>{
     const [usuario,setUsuario]=useState(null)
     const [data,setData]=useState([]);
     const [carrito,setCarrito]=useState(JSON.parse(localStorage.getItem("carrito"))||[]);
     
     useEffect(()=>{
      axios("listaProducto.json").then((res)=> setData(res.data));
     },[]);
     
     function addProducto(product){
      const productRepeact=carrito.find((item)=> item.id ===product.id);
      if(productRepeact){
        setCarrito(carrito.map((item)=>item.id===product.id?{...product,cantida:productRepeact.
          cantida + 1}:item));
      }else{setCarrito([...carrito,product]);
        localStor()
      }
    }

    return <dataContent.Provider value={{data,carrito,setCarrito,addProducto,usuario,setUsuario,localStor}}> {children} </dataContent.Provider>
    function localStor(){
      localStorage.setItem("carrito",JSON.stringify(carrito))
    }     
}
export default DataProvide;

  



