import { useEffect, useState } from "react";
import axios from "axios";
import initialState from "../initialState";

const API = "http://localhost:1337/api/products?populate=%2A";

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios(API);
      setProducts(response.data.data);
    };
    fetchProducts();
  }, []);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== payload.id),
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: payload,
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };
  return {
    state,
    products,
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
  };
};

export default useInitialState;
