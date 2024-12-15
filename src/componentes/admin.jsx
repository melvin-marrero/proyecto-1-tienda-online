import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Adminitration() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Si el token ya está en localStorage, redirige automáticamente al PanelAdmin
    if (localStorage.getItem("token")) {
      navigate("/panelAdmin");
    }
  }, [navigate]);
  

  const enviarForm = handleSubmit(async (data) => {
    try {
      const response = await axios.post("https://bask-end-tiend-online.onrender.com/api/auth/login", {
        email: data.email,
        contraseña: data.contraseña,
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      });

      // Si la respuesta es exitosa, guarda el token en localStorage
      localStorage.setItem("token", response.data.token);
      
      // Redirige al panelAdmin tras iniciar sesión
      navigate("/panelAdmin");

    } catch (error) {
      setErrorMessage("Email o contraseña incorrectos");
      console.error("Error en el login:", error.response ? error.response.data : error.message);
    }
  });

  return (
    <div className="container">
      <div className="container-form">
        <form className="form" onSubmit={enviarForm}>
          <h4>Inicie sesión para acceder al área de administración</h4>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email", { required: "Email es requerido" })} />
          {errors.email && <span>{errors.email.message}</span>}

          <label htmlFor="contraseña">Contraseña</label>
          <input type="password" id="contraseña" {...register("contraseña", { required: "Contraseña es requerida" })} />
          {errors.contraseña && <span>{errors.contraseña.message}</span>}

          {errorMessage && <span>{errorMessage}</span>}

          <input type="submit" className="btn-login" value={"Iniciar sesión"} />
        </form>
      </div>
    </div>
  );
}
