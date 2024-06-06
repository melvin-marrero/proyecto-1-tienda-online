import Iphone from "../componentes/carpetaProducto/iphone";
import DefaulLayoutUsuario from "./defaulLayoutUsuario";


export default function ContainerIphoneUsuario() {
  return (
    <DefaulLayoutUsuario>
      <div className='container-producto'>
        <Iphone />
      </div>
    </DefaulLayoutUsuario>
  )
}
