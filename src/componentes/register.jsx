import { useForm } from "react-hook-form"
import MarrerosoftwareCompanys from "../imagenes/MarrerosoftwareCompanys.png"
import { Link,useNavigate } from "react-router-dom";
import appFirebase from "../firebase/firebase"
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth"
const auth=getAuth(appFirebase);


export default function Register() {
    const {register,handleSubmit,formState:{errors}}=useForm();
    const togo=useNavigate();
  return (
    <div className="container-login">
        <div className="imagen-conten">
          <Link to={"/"}><img src={MarrerosoftwareCompanys} alt="img-logo" className="img-logo"/></Link>
        </div>
        <div className="container-form">
            <form className="form" onSubmit={handleSubmit(async(e)=>{
                console.log(e);
                const correo=e.email;
                const password=e.contraseña;
                try {
                const response = await createUserWithEmailAndPassword(auth,correo,password);
                   if(response.ok){
                     
                   }
                   alert("usuario creado con exito");
                   togo("/inicioSeccion")
                  } catch (error) {
                    alert("este usuario ya existe")
                  }
            })}>
            <h4>crear usuario</h4>
            <label htmlFor="email">email</label>
            <input type="email" id="email"
            {...register("email",{required:{
                value:true,
                message:"email es requerido"
            },pattern:{
                value:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message:"ingrese un correro valido"}})}/>
              {errors.email &&<span>{errors.email.message}</span>}

            <label htmlFor="contraseña">contraseña</label>
            <input type="password" id="contraseña"
            {...register("contraseña",{required:{
                value:true,
                message:"ingrese su contraseña"
            },minLength:{
                value:6,
                message:"minimo 6 carasteres"
            },maxLength:{
                value:16,
                message:"maximo 16 carasteres"
            }})}/>
              {errors.contraseña &&<span>{errors.contraseña.message}</span>}
            <input type="submit" className="btn-login" value={"crear usuario"}/>
            <p>ya tienes una cuenta <Link to={"/inicioSeccion"}>inicia seccion</Link> </p>
            </form>
        </div>
    </div>
  )
}
