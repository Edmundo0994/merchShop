import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AppContext from "../context/AppContext";
import "../styles/components/Checkout.css";

export default function Checkout() {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;
  const totalPrice = cart.reduce((a, b) => a + (b.price || 0), 0);
  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de Pedidos:</h3>
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.uid} className="Checkout-item">
              <div className="Checkout-element">
                <div className="Checkout-detail">
                  <img src={`http://localhost:1337${item.image.data[0].attributes.url}`} alt={item.title} />
                  <h4>{item.title}</h4>
                </div>
                <span>${item.price}</span>
              </div>
              <button type="button" onClick={() => handleRemoveFromCart(item)}>
                <DeleteOutlineIcon size="small" />
              </button>
            </div>
          ))
        ) : (
          <h2>No hay nada dentro del carrito</h2>
        )}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total: ${totalPrice}</h3>
          <Link to="/checkout/information">
            <button id="ctn-btn" type="button">
              Continuar pedido
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
