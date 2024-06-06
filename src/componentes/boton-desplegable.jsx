import "../hojasDestilo/botonDesplegables.css"
import { Link } from "react-router-dom"

export default function BotonDesplegables(){
    return (
   <div class="dropdown contendor">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      celulares
      </button>
      <ul class="dropdown-menu">
        <li><Link class="dropdown-item" to={"/iphone"}>iphone</Link></li>
        <li><Link class="dropdown-item" to={"/sansung"}>sansung</Link></li>
        <li><Link class="dropdown-item" to={"/xiaomi"}>xiaomi</Link></li>
     </ul>
    </div>
    )

}