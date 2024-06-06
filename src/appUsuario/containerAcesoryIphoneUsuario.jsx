import ParaIphone from "../componentes/carpetaProducto/paraIphone";
import DefaulLayoutUsuario from "./defaulLayoutUsuario";

export default function ContainerAccesoryIphoneUsuario() {
    return (
      <DefaulLayoutUsuario>
        <div className="container-producto">
          <ParaIphone />
        </div>
      </DefaulLayoutUsuario>
    )
  }