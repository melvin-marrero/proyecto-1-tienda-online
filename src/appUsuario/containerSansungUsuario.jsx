import Sansung from "../componentes/carpetaProducto/sansung";
import DefaulLayoutUsuario from "./defaulLayoutUsuario";


export default function ContainerSansungUsuario() {
  return (
    <DefaulLayoutUsuario>
      <div className='container-producto'>
        <Sansung />
      </div>
    </DefaulLayoutUsuario>
  )
}