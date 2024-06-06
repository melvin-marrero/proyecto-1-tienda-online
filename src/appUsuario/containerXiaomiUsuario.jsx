import Xiaomi from "../componentes/carpetaProducto/xiaomi";
import DefaulLayoutUsuario from "./defaulLayoutUsuario";


export default function ContainerXiaomiUsuario() {
  return (
    <DefaulLayoutUsuario>
      <div className='container-producto'>
        <Xiaomi />
      </div>
    </DefaulLayoutUsuario>
  )
}