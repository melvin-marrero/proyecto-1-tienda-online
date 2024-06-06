import { useContext } from "react";
import { dataContent } from "./dataContent/dataConten";

export default function CantidaProduct(){
    const { carrito }=useContext(dataContent);
    const numProduct = carrito.reduce((acc,ele) => acc+ele.cantida,0);
    return <div>{numProduct}</div>
}