import { Link } from "react-router-dom"

export default function BotonDesplegableUsuario(){
    return (
   <div class="dropdown contendor">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        celulares
      </button>
      <ul class="dropdown-menu">
        <li><Link class="dropdown-item" to={"/iphones"}>iphone</Link></li>
        <li><Link class="dropdown-item" to={"/sansungs"}>sansung</Link></li>
        <li><Link class="dropdown-item" to={"/xiaomis"}>xiaomi</Link></li>
     </ul>
    </div>
    )

}