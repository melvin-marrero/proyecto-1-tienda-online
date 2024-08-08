
import Header from "./header";
import Main from "./main";
import tienda2 from "../imagenes/tienda2.webp"
import carritolleno from "../imagenes/carritolleno.jpg"
import Footer from "./footer";
import DefaulLayaout from "./layoaut/defaulLayaout";


export default function Home(){
  return (
    
    <DefaulLayaout>
      
      <div className="container-fluid">
    
        <Header />
        <h3 className='h3-1'><i>actualiza tu vida</i></h3>
        <p className='p-1'><i>todo lo que necesita esta a un click ,el mundo en tus manos</i></p>
        <h3 className="h3-2"><i>producto mas mas buscado en las ultimas semanas</i></h3>
          <Main />
        <div className="container conten-img">
          <img src={tienda2} alt="img-tienda" className="img-tienda2" />
          <img src={carritolleno} alt="img-tienda2" className="img-tienda2" />
        </div>
        <Footer />
      </div>
    </DefaulLayaout>
  )
}
