import { useForm } from "react-hook-form"
import "../hojasDestilo/login.css"
import MarrerosoftwareCompanys from "../imagenes/MarrerosoftwareCompanys.png"
import { Link ,} from "react-router-dom"
import appFirebase from "../firebase/firebase"
import { getAuth,signInWithEmailAndPassword } from "firebase/auth"
const auth=getAuth(appFirebase)

export default function Login() {
  const {register,handleSubmit,formState:{errors}}=useForm()
  
  return (
    <div className="container">
         
          <Link to={"/"} className="link"><img src={MarrerosoftwareCompanys} alt="img-logo" className="img-logo"/></Link>
        
         <div className="container-form">
            <form className="form" onSubmit={handleSubmit(async(e)=>{
               const correo=e.email;
               const password=e.contraseña;
               try {
                  await signInWithEmailAndPassword(auth,correo,password);
                  console.log("seccion iniciada");
                } catch (error) {
                  alert("el usuario o la contraseña son incorretos")
                }
                })}>
                <h4>inicial seccion</h4>
                <label htmlFor="email">email</label>
                <input type="email" id="email"
                {...register("email",{required:{
                   value:true,
                   message:"email es requerido"
                 }})}/>
                  {errors.email && <span>{errors.email.message}</span>}

                <label htmlFor="contraseña">contraseña</label>
                <input type="password" id="contraseña"
                {...register("contraseña",{required:{
                  value:true,
                  message:"ingrese su contraseña"
                }})}/>
                 {errors.contraseña && <span>{errors.contraseña.message}</span>}

                <input type="submit" className="btn-login" value={"inicial seccion"}/>
                  <p>no tienes una cuenta <Link to={"/register"}>Registrate</Link></p>
            </form> 
         </div>
    </div>
  )
}