import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Home, Checkout, Information, Payment, Success, NotFound } from "../containers";
import Layout from "../components/Layout";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

const initialOptions = {
  "client-id": process.env.MERCH_APP_CLIENT_ID,
  currency: "USD",
  intent: "capture",
  "data-client-token": process.env.MERCH_APP_DATA_CLIENT_TOKEN,
};

export default function App() {
  const initialState = useInitialState();
  const isEmpty = Object.keys(initialState.state).length;
  if (isEmpty <= 0) {
    return <h1>Loading...</h1>;
  }
  return (
    <PayPalScriptProvider value={initialOptions}>
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
    </PayPalScriptProvider>
  );
}
