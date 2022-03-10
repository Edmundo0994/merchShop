import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home, Checkout, Information, Payment, Success, NotFound } from "../containers";
import Layout from "../components/Layout";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

export default function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/checkout/information" element={<Information />} />
            <Route exact path="/checkout/payment" element={<Payment />} />
            <Route exact path="/checkout/success" element={<Success />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}
