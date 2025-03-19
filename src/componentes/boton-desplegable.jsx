import "../hojasDestilo/botonDesplegables.css"
import { Link } from "react-router-dom"

export default function BotonDesplegables(){
    return (
   <div class="dropdown contendor">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Electronicos
      </button>
      <ul class="dropdown-menu menu-product">
        <li><Link class="dropdown-item" to={"/celulares"}>celulares..</Link></li>
        <li><Link class="dropdown-item" to={"/accesorios"}>accesorio.</Link></li>
        <li><Link class="dropdown-item" to={"/audios"}>audios</Link></li>
     </ul>
    </div>
    )

}