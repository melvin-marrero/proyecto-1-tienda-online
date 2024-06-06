import { useContext } from "react"
import { dataContent } from "./dataContent/dataConten"
import "../hojasDestilo/itemCart.css"
import PrecioTotal from "./precioTotal"
import ProductoCarrito from "./productoCarrito"
import carritovacio from "../imagenes/carritovacio.png"
import appFirebase from "../firebase/firebase"
import { getFirestore,collection,addDoc } from "firebase/firestore"
const db=getFirestore(appFirebase);

export default function ItemCart(){
    const { carrito }=useContext(dataContent);
    const saveInfo= async()=>{
        try {
            await addDoc(collection(db,"ventas"),{
                ...producto,subTotal
            })
        } catch (error) {
            alert("ocurrio un error");
            console.log(error)
        }
    }
    const subTotal=carrito.reduce((acc,ele)=>acc+ele.precio*ele.cantida,0);
    const producto=carrito;
    return carrito.length >0 ?(
           <div className="container container-item">
              <ProductoCarrito />
              <PrecioTotal />
              <button className="btn-pagar" onClick={saveInfo}>
                pagar
              </button>
           </div>  
        
    ): <img src={carritovacio} alt="cart-vacio" className="cart-vacio"/>
    
}