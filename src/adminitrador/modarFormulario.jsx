
import { useState } from "react";
import { useForm } from "react-hook-form"

export default function ModalFormulario( { product } ){
  const [creado,setcreado]=useState()
  const [existe,setExiste]=useState();
  const {register,handleSubmit,formState:{errors}}=useForm();
  const Api_Url= "https://bask-end-tiend-online.onrender.com/api";

  const enviarFOrm = handleSubmit(async (e) => {
    const formData = new FormData();
    formData.append('nombre', e.nombre);
    formData.append('precio', e.precio);
    formData.append('cantidaDisponible', e.cantidaDisponible);
    formData.append('descri', e.descri);
    formData.append('cantida', e.cantida);
    formData.append('image', e.image[0]);

    try {
        const response = await fetch(`${Api_Url}/${product}`, {
            method: "POST",
            body: formData,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`, 
            },
        });

        if (response.ok) {
            console.log("Producto agregado");
            alert("Producto agregado");
            setcreado("Producto agregado con éxito");
            setExiste("");
        } else {
            const errorData = await response.json();
            console.log("Hubo un error:", errorData.error);
            setExiste(errorData.error || "Error desconocido");
            setcreado("");
        }
    } catch (error) {
        console.log("Error:", error);
    }
});

    return (
      <>
        <button type="button" className="btn-panel" 
          data-bs-toggle="modal" data-bs-target="#exampleModal">
          Agregar producto
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">ingrese el producto</h5>
              </div>
              <div class="modal-body">
                <form action="" onSubmit={enviarFOrm}>
                    <label htmlFor="nombre" className="label-panel">nombre</label>
                    <input type="text" id="nombre" className="inpu-name"
                    {...register("nombre",{required:{
                      value:true,
                      message:"ingrese nombre del producto"
                      },
                      maxLength:{
                        value:"30",
                        message:"30 carasteres maximo"
                      },
                      minLength:{
                        value:"3",
                        message:"3 carasteres minimo"
                      },
                      })}/>
                      {errors.nombre &&<span>{errors.nombre.message}</span>}
                

                    <label htmlFor="precio"className="label-panel">precio</label>
                    <input type="number" id="precio"className="inpu-precio"step="any" 
                    {...register("precio",{required:{
                      value:true,
                      message:"ingrese el precio"
                      }})}/>
                       {errors.precio &&<span>{errors.precio.message}</span>}

                    <label htmlFor="cantidaDisponible"className="label-panel">cantidad disponible</label>
                    <input type="number" id="cantidaDisponible" className="inpu-precio"
                    {...register("cantidaDisponible",{required:{
                      value:true,
                      message:"ingrese cantida disponible"
                      }})}/>
                      {errors.cantidaDisponible &&<span>{errors.cantidaDisponible.message}</span>}

                    <label htmlFor="image"className="label-panel">imagen</label>
                    <input type="file" id="image" name="image" accept="image/*"
                    {...register("image",{required:{
                      value:true,
                      message:"elija una imagen"
                      }})}/>
                      {errors.image &&<span>{errors.image.message}</span>}

                    <label htmlFor="descri"className="label-panel">descripcion</label>
                    <textarea name="descri" id="descri" rows={"4"} cols={"50"}
                    {...register("descri",{required:{
                      value:true,
                      message:"requiere descripcion"
                      }})}/>
                       {errors.descri &&<span>{errors.descri.message}</span>}

                    <label htmlFor="cantida"className="label-panel">quantity</label>
                    <input type="number" id="cantida" className="inpu-precio" value={1}
                    {...register("cantida",{required:{
                      value:true,
                      message:"ingrese  el numero 1"
                      }
                      })}/>
                      

                    <input type="submit" className="btn-panel" value={"agregar producto"}/>
                      <h6 className="h6-exito">{creado}</h6>
                      <span>{existe}</span>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Cerrar
                </button>

              </div>
            </div>
          </div>
        </div>
      </>
    )
}