import { useContext } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { dataContent } from "./dataContent/dataConten";
import "../hojasDestilo/itemCart.css";
import PrecioTotal from "./precioTotal";
import ProductoCarrito from "./productoCarrito";
import carritovacio from "../imagenes/carritovacio.png";

export default function ItemCart() {
  const { carrito, setCarrito } = useContext(dataContent);

  // Calcular el total del carrito asegurando que siempre sea un número válido
  const total = carrito
  .reduce((acc, item) => {
    const precioItem = parseFloat(item.precio) || 0; // Asegúrate de que sea un número
    const cantidadItem = parseInt(item.cantida) || 0; // Asegúrate de que sea un número
    console.log(`Producto: ${item.nombre}, Precio: ${precioItem}, Cantidad: ${cantidadItem}`);
    return acc + (precioItem * cantidadItem);
  }, 0).toFixed(2); // Formato a dos decimales

  console.log("Total calculado en ItemCart:", total);

 
  carrito.forEach(item => 
    console.log(`Producto: ${item.nombre}, Precio: ${item.precio}, Cantidad: ${item.cantidad}`)
  );

  // Función para registrar la orden en el backend
  const registrarOrdenEnBackend = async (detalles) => {
    const payerName = detalles.payer && detalles.payer.name
      ? `${detalles.payer.name.given_name} ${detalles.payer.name.surname}`
      : "Cliente Anónimo";
  
      const orden = {
        orderId: detalles.id,
        payerName: payerName,
        amount: parseFloat(detalles.purchase_units[0].amount.value),
        currency: detalles.purchase_units[0].amount.currency_code
      };
  
      try {
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

      <PayPalScriptProvider options={{ "client-id": "AfmFYAJudxF8UxXBL8Wx16DO3X4n-HnkEYMAoSRFujAImBBso095UxTXX6VUvW7Lv9O8OfX-o33Hzbw1" }}>
        <PayPalButtons
          createOrder={(data, actions) => {
            let totalPago = parseFloat(total); // Asegurémonos de que es un número

               // Si el total es inválido o 0, forzamos un valor mínimo
                if (isNaN(totalPago) || totalPago <= 0) {
                totalPago = 0.01;
              }

           console.log("Total enviado a PayPal:", totalPago, typeof totalPago);

            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    currency_code: "USD",
                    value: totalPago.toString(), // Convertir a string explícitamente
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              alert(`✅ Pago exitoso, gracias ${details.payer.name.given_name}!`);
              registrarOrdenEnBackend(details);
              setCarrito([]);
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
