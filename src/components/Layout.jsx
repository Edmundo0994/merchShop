import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/components/Layout.css";

export default function Layout({ children }) {
  return (
    <main className="Main">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
