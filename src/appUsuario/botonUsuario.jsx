import { getAuth,signOut } from "firebase/auth";
import appFirebase from "../firebase/firebase";
import "../hojasDestilo/botonUsuario.css"
import { useNavigate } from "react-router-dom";


const auth=getAuth(appFirebase);

export default function BotonUsuario(){
    const togo=useNavigate();
    function salir(){
        signOut(auth);
        togo("/")
    }
    return (
   <div class="contendor">
        <button class="btn-user  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="bi-user bi-person-circle"></i>
        </button>
        <ul class="dropdown-menu">
           <li><a class="dropdown-item" href="#">historiar de pedido</a></li>
           <li><a class="dropdown-item" href="#" onClick={salir}>serrar seccion</a></li> 
        </ul>
    </div>
    )

}