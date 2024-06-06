import DefaulLayaout from "../layoaut/defaulLayaout";
import Sansung from "./sansung";


export default function ContainerSansung(){
    return (
      <DefaulLayaout>
        <div className="container-producto">
          <Sansung />
        </div>
      </DefaulLayaout>
    )
}