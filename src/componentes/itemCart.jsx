import { useContext } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { dataContent } from "./dataContent/dataConten";
import "../hojasDestilo/itemCart.css";
import PrecioTotal from "./precioTotal";
import ProductoCarrito from "./productoCarrito";
import carritovacio from "../imagenes/carritovacio.png";


export default function ItemCart() {
  const { carrito, setCarrito } = useContext(dataContent); // Agregar setCarrito para vaciar el carrito

  // Calcular el total del carrito asegurando que siempre sea un número válido
  const total = carrito
    .reduce((acc, item) => acc + (Number(item.precio) || 0) * (Number(item.cantidad) || 0), 0)
    .toFixed(2);

  console.log("Total calculado:", total, typeof total);
  console.log("Carrito:", carrito);
  carrito.forEach(item => 
    console.log(`Producto: ${item.nombre}, Precio: ${item.precio}, Cantidad: ${item.cantidad}`)
  );

  // Función para registrar la orden en el backend
  const registrarOrdenEnBackend = async (detalles) => {
    // Verificar si los detalles del comprador están disponibles
    const payerName = detalles.payer && detalles.payer.name
      ? `${detalles.payer.name.given_name} ${detalles.payer.name.surname}`
      : "Cliente Anónimo"; // Si no hay nombre, usar un valor predeterminado
  
    // Construir el objeto orden
    const orden = {
      orderId: detalles.id,  // ID de la orden
      payerName: payerName,   // Nombre del comprador (si no está disponible, se usa "Cliente Anónimo")
      amount: parseFloat(detalles.purchase_units[0].amount.value), // Monto del pago
      currency: detalles.purchase_units[0].amount.currency_code // Moneda
    };
  
    try {
      // Enviar la orden al backend
      const respuesta = await fetch("https://bask-end-tiend-online.onrender.com/api/paypal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orden),
      });
  
      const resultado = await respuesta.json();
      console.log("Orden guardada en backend:", resultado);
    } catch (error) {
      console.error("Error al registrar la orden en el backend:", error);
    }
  };
  
  

  return carrito.length > 0 ? (
    <div className="container container-item">
      <ProductoCarrito />
      <PrecioTotal />

      {/* Envolvemos el botón de PayPal en PayPalScriptProvider */}
      <PayPalScriptProvider options={{ "client-id": "AdWoibkO6Pvx35asOnG4Eh5uMDzWAl3AgedmOMtrrVLSu0vAW-vqfpLuXjLqnSCIo3CpN_3pJFPRpFXp" }}>
        <PayPalButtons
          createOrder={(data, actions) => {
            try {
              const totalPago = isNaN(Number(total)) || Number(total) <= 0 ? "0.01" : total;
              console.log("Total enviado a PayPal:", totalPago);
              
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: totalPago, // Asegurar que es un número válido
                    },
                  },
                ],
              });
            } catch (error) {
              console.error("Error al crear la orden:", error);
            }
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              alert(`✅ Pago exitoso, gracias ${details.payer.name.given_name}!`);

              // 1. Guardar la orden en el backend
              registrarOrdenEnBackend(details);

              // 2. Vaciar el carrito después del pago
              setCarrito([]);

              // 3. Mostrar mensaje de éxito en consola
              console.log("Pago completado con éxito:", details);
            });
          }}
          onError={(err) => {
            console.error("Error en PayPal:", err);
            alert("❌ Ocurrió un error al procesar el pago. Intenta nuevamente.");
          }}
        />
      </PayPalScriptProvider>
    </div>
  ) : (
    <img src={carritovacio} alt="cart-vacio" className="cart-vacio" />
  );
}
