import React from "react";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "../styles/components/Header.css";

export default function Header() {
  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">Merch Store</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <ShoppingBasketIcon size="small" />
        </Link>
      </div>
    </div>
  );
}
