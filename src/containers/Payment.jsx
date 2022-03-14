import React, { useContext, useEffect } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";
import "../styles/components/Payment.css";

export default function Payment() {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const totalPrice = cart.reduce((a, b) => a + (b.price || 0), 0);

  const [{ options }, dispatch] = usePayPalScriptReducer();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: "USD",
      },
    });
  }, []);

  const handlePaymentSuccess = (data) => {
    if (data.status === "COMPLETED") {
      const newOrder = {
        buyer,
        products: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      navigate("/checkout/success");
    }
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resument del pedido:</h3>
        {cart.map((item) => (
          <div key={item.id} className="Checkout-item">
            <div className="Checkout-element">
              <div className="Checkout-detail">
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
              </div>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <hr />
        <PayPalButtons
          createOrder={(data, actions) =>
            actions.order.create({
              purchase_units: [
                {
                  amount: {
                    currency_code: "USD",
                    value: totalPrice,
                  },
                },
              ],
            })
          }
          onApprove={(data, actions) =>
            actions.order.capture().then((info) => {
              handlePaymentSuccess(info);
            })
          }
        />
      </div>
      <div className="Information-sidebar">
        <hr />
        <div className="Information-sidebar-total">
          <span>Total:</span>
          <span>$ {totalPrice}</span>
        </div>
      </div>
    </div>
  );
}
