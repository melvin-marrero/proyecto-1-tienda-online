import { useForm } from "react-hook-form";
import "../hojasDestilo/login.css";
import { Link } from "react-router-dom";
import appFirebase from "../firebase/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(appFirebase);

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <div className="login-container"> {/* Clase para el fondo de pantalla */}
      <div className="container-form">
        <form className="form" onSubmit={handleSubmit(async (e) => {
          const correo = e.email;
          const password = e.contraseña;
          try {
            await signInWithEmailAndPassword(auth, correo, password);
            console.log("Sesión iniciada");
          } catch (error) {
            alert("El usuario o la contraseña son incorrectos");
          }
        })}>
          <h4>Iniciar sesión</h4>
          
          <label htmlFor="email">Email</label>
          <input type="email" id="email"
            {...register("email", { required: { value: true, message: "Email es requerido" } })}
          />
          {errors.email && <span>{errors.email.message}</span>}

          <label htmlFor="contraseña">Contraseña</label>
          <input type="password" id="contraseña"
            {...register("contraseña", { required: { value: true, message: "Ingrese su contraseña" } })}
          />
          {errors.contraseña && <span>{errors.contraseña.message}</span>}

          <input type="submit" className="btn-login" value={"Iniciar sesión"} />
          <p>No tienes una cuenta <Link to={"/register"}>Regístrate</Link></p>
        </form> 
      </div>
    </div>
  );
}
