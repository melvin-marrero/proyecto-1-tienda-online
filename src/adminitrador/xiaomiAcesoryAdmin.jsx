
import ModalFormulario from "./modarFormulario"
import { useEffect,useState,useRef } from "react"
import EdiccionForm from "./ediccionForm";
import PanelMenu from "./adminMenu";

export default function XiaomiAcesoryAdmin(){
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [query, setQuery] = useState("");  // Estado para almacenar el término de búsqueda
  const inputRef = useRef(null); 

  useEffect(() => {
    const fetchProductos = async () => {
        try {
            const response = await fetch('https://bask-end-tiend-online.onrender.com/api/xiaomiAcesory'); // Ajusta la URL según tu configuración
            if (!response.ok) {
                throw new Error('Error al obtener productos');
            }
            const data = await response.json();
            setProductos(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    fetchProductos();
}, []);

const productosFiltrados = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(query.toLowerCase())
 );

const handleEliminar = async (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este producto?")) {
      try {
        const response = await fetch(`https://bask-end-tiend-online.onrender.com/api/xiaomiAcesory/${id}`, {
          method: 'DELETE',
        });
        const result = await response.json();

        if (response.ok) {
          alert(result.message);
          // Actualizar el estado de productos para reflejar la eliminación
          setProductos(productos.filter(producto => producto._id !== id));
        } else {
          alert(result.error || 'Error al eliminar el producto');
        }
      } catch (error) {
        alert("Error de red al eliminar el producto");
      }
    }
  };

if (loading) return <div>Cargando...</div>;
if (error) return <div>Error: {error}</div>;
    return (
<div className="conten">
    <PanelMenu /> 
    <div className="containe-produc-panel">
        <ModalFormulario product={"xiaomiAcesory"}/>
      {/* Campo de búsqueda */}
      <div className="search-bar conten-buscar">
               <input 
                  className="input-buscar"
                  ref={inputRef}  // Mantener referencia para el campo de entrada
                  type="text"
                  placeholder="Buscar..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}  // Actualiza el estado de búsqueda
                  autoFocus  // Mantiene el foco en el campo de búsqueda
               />
            </div>

            {/* Mostrar todos los productos o los filtrados */}
            {productosFiltrados.length > 0 ? (
               productosFiltrados.map((item) => {
                  return (
                     <div key={item._id} className="product-panel">
                        <table className="product-table">
                           <thead>
                              <tr>
                                 <th>Imagen</th>
                                 <th>Nombre</th>
                                 <th>Precio</th>
                                 <th>Cantidad Disponible</th>
                                 <th>Descripción</th>
                                 <th>Acciones</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <td><img src={item.image} alt="img-product" className="img-panl" /></td>
                                 <td className="h6-nombre-panel">{item.nombre}</td>
                                 <td className="p-panel">${new Intl.NumberFormat().format(item.precio)}</td>
                                 <td className="p-cantida-panel">{item.cantidaDisponible}</td>
                                 <td className="p-descrp">{item.descri}</td>
                                 <td>
                                    <EdiccionForm 
                                       producto={productoSeleccionado}
                                       urlProduct={"xiaomiAcesory"} 
                                       selector={() => setProductoSeleccionado(item)} 
                                    />
                                    <button className="btn btn-primary eliminar" onClick={() => handleEliminar(item._id)}>
                                       Eliminar
                                    </button>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  );
               })
            ) : (
               <div>No se encontraron productos que coincidan.</div>
            )}
    </div>
</div>
    )
}