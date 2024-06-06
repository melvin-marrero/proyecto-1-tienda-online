import { Link } from "react-router-dom"
export default function BotonDesplegablesAccesory(){
    return (
   <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      accesorio
      </button>
      <ul class="dropdown-menu">
        <li><Link class="dropdown-item" to={"/paraIphone"}>para-iphon</Link></li>
        <li><Link class="dropdown-item" to={"/paraSansung"}>para-sansung</Link></li>
        <li><Link class="dropdown-item" to={"/paraXiaomi"}>para-xiaomi</Link></li>
     </ul>
    </div>
    )
}