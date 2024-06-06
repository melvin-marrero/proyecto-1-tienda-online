import { Suspense, useContext } from "react"
import { dataContent } from "./dataContent/dataConten"
import Login from "./login"
import AppUsuario from "../appUsuario/appusuario"
import appFirebase from "../firebase/firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth"
const auth=getAuth(appFirebase)


export default function InicioSeccion() {
  const {usuario,setUsuario}=useContext(dataContent);
  onAuthStateChanged(auth,(usuarioActivo)=>{
    if(usuarioActivo){
      setUsuario(usuarioActivo)
    }else{
      setUsuario(null)
    }
  })
  return (
  <>
    <div>
      {usuario? <Suspense fallback={<div>iniciando seccion...</div>}><AppUsuario correoUsuario={usuario.email}/></Suspense>:<Login /> }
    </div>
  </>
  )
}

