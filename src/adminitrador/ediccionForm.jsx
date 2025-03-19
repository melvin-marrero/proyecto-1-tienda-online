import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function EdiccionForm({ producto,selector,urlProduct }) {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    // Cargar los datos del producto al formulario
    useEffect(() => {
        if (producto) {
            setValue("nombre", producto.nombre);
            setValue("precio", producto.precio);
            setValue("cantidaDisponible", producto.cantidaDisponible);
            setValue("descri", producto.descri);
            // No cargamos la imagen aquí, ya que es un archivo.
        }
    }, [producto, setValue]);

    const enviarFOrm = handleSubmit(async (e) => {
        const formData = new FormData();
        formData.append('nombre', e.nombre);
        formData.append('precio', e.precio);
        formData.append('cantidaDisponible', e.cantidaDisponible);
        formData.append('descri', e.descri);
        // Si necesitas editar la imagen, incluye la lógica aquí.
        if (e.image && e.image.length > 0) {
            formData.append('image', e.image[0]);
        }

        try {
            const response = await fetch(`https://bask-end-tiend-online.onrender.com/api/${urlProduct}/${producto._id}`, { // Cambia la URL
                method: "PUT", // Cambia a PUT para editar
                body: formData,
            });
            if (response.ok) {
                alert("Producto actualizado");
            } else {
                alert("Error al actualizar el producto");
            }
        } catch (error) {
            console.log(error);
        }
    });

    return (
        <>
            <button type="button" className="btn btn-primary editar" data-toggle="modal" data-target="#exampleModalLong"
            onClick={selector}>
                Editar
            </button>
            <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Editar producto</h5>
                        </div>
                        <form onSubmit={enviarFOrm}>
                            <label htmlFor="nombre" className="label-panel-2">Nombre</label>
                            <input type="text" className="inpu-name-2" id="nombre" {...register("nombre", { required: true })} />
                            {errors.nombre && <span>{errors.nombre.message}</span>}

                            <label htmlFor="precio" className="label-panel-2">Precio</label>
                            <input type="number" className="inpu-precio-2" 
                             step="any" id="precio" {...register("precio", { required: true })} />

                            <label htmlFor="cantidaDisponible" className="label-panel-2">Cantidad Disponible</label>
                            <input type="number" className="inpu-precio-2" id="cantidaDisponible" {...register("cantidaDisponible", { required: true })} />

                            <label htmlFor="image" className="label-panel-2">Imagen</label>
                            <input type="file" id="image" {...register("image")} />

                            <label htmlFor="descri" className="label-panel-2">Descripción</label>
                            <textarea id="descri" rows={"4"} cols={"50"} {...register("descri")}></textarea>

                            <input type="submit" className="btn-panel-editar" value="Editar producto" />
                        </form>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
