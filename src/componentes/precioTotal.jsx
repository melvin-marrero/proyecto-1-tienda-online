import { useContext } from "react"
import { dataContent } from "./dataContent/dataConten"

export default function PrecioTotal() {
    const {carrito}=useContext(dataContent);
    const total = carrito.reduce((acc,ele)=>acc+ele.precio*ele.cantida,0);
  return (
    <div className="precioTotak">
      <h6>total a pagal ${new Intl.NumberFormat().format(total)}</h6>
    </div>
  )
  
}
