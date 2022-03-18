import React, { useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Alert from "@mui/material/Alert";
import AppContext from "../context/AppContext";
import "../styles/components/Information.css";

export default function Information() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const navigate = useNavigate();

  const { cart } = state;
  const totalPrice = cart.reduce((a, b) => a + (b.price || 0), 0);

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    if (
      formData.get("name").length > 0 &&
      formData.get("email").length > 0 &&
      formData.get("address").length > 0 &&
      formData.get("city").length > 0 &&
      formData.get("country").length > 0 &&
      formData.get("state").length > 0 &&
      formData.get("cp").length > 0 &&
      formData.get("phone").length > 0
    ) {
      const buyer = {
        name: formData.get("name"),
        email: formData.get("email"),
        address: formData.get("address"),
        apto: formData.get("apto"),
        city: formData.get("city"),
        country: formData.get("country"),
        state: formData.get("state"),
        cp: formData.get("cp"),
        phone: formData.get("phone"),
      };
      addToBuyer(buyer);
      navigate("/checkout/payment");
    } else {
      handleOpen();
    }
  };

  return (
    <div className="Information">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Alert severity="error">¡Hey! Completa los campos requeridos</Alert>
        </Box>
      </Modal>
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" required />
            <input type="text" placeholder="Correo Electronico" name="email" required />
            <input type="text" placeholder="Direccion" name="address" required />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" required />
            <input type="text" placeholder="Pais" name="country" required />
            <input type="text" placeholder="Estado" name="state" required />
            <input type="text" placeholder="Codigo postal" name="cp" required />
            <input type="text" placeholder="Telefono" name="phone" required />
          </form>
        </div>
        <div className="Information-buttons">
          <Link to="/checkout">
            <div className="Information-back">Regresar</div>
          </Link>
          <button type="button" className="Information-next" onClick={handleSubmit}>
            Pagar
          </button>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div key={`${item.uid}-sidebar`} className="Information-item">
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <hr />
        <div className="Information-sidebar-total">
          <span>Total:</span>
          <span>$ {totalPrice}</span>
        </div>
      </div>
    </div>
  );
}
