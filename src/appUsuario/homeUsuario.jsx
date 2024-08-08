import Footer from "../componentes/footer";
import Header from "../componentes/header";
import Main from "../componentes/main";
import DefaulLayoutUsuario from "./defaulLayoutUsuario";
import tienda2 from "../imagenes/tienda2.webp"
import carritolleno from "../imagenes/carritolleno.jpg"


export default function HomeUsuario() {
  return (
    <DefaulLayoutUsuario>
       <div className="container-fluid">
           <Header />
           <h3 className='h3-1'><i>actualiza tu vida</i></h3>
           <p className='p-1'><i>todo lo que necesita esta a un click ,el mundo en tus manos</i></p>
           <h3 className="h3-2"><i>producto mas mas buscado en las ultimas semanas</i></h3>
           <div className="container-producto">
             <Main />
           </div>
           <div className="conten-img">
              <img src={tienda2} alt="img-tienda" className="img-tienda2" />
              <img src={carritolleno} alt="img-tienda2" className="img-tienda2" />
            </div>
           <Footer />
        </div>
    </DefaulLayoutUsuario>
  )
}
