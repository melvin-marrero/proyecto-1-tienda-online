import { Link } from "react-router-dom"

export default function BotonDesplegableUsuario(){
    return (
   <div class="dropdown contendor">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Electronicos
      </button>
      <ul class="dropdown-menu">
        <li><Link class="dropdown-item" to={"/celularess"}>celulares..</Link></li>
        <li><Link class="dropdown-item" to={"/accesorioss"}>accesorio.</Link></li>
        <li><Link class="dropdown-item" to={"/audioss"}>audios</Link></li>
     </ul>
    </div>
    )

}