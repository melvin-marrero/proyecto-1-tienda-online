import ParaSansung from "../componentes/carpetaProducto/paraSansung";
import DefaulLayoutUsuario from "./defaulLayoutUsuario";

export default function ContainerAccesorySansungUsuario() {
    return (
      <DefaulLayoutUsuario>
        <div className="container-producto">
          <ParaSansung />
        </div>
      </DefaulLayoutUsuario>
    )
  }