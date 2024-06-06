import ParaXiaomi from "../componentes/carpetaProducto/paraXiaomi";
import DefaulLayoutUsuario from "./defaulLayoutUsuario";

export default function ContainerAccesoryXioamiUsuario() {
    return (
      <DefaulLayoutUsuario>
        <div className="container-producto">
          <ParaXiaomi />
        </div>
      </DefaulLayoutUsuario>
    )
  }