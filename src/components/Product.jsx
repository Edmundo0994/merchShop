import React from "react";

export default function Product({ product, handleAddToCart }) {
  // console.log(product.attributes.image.data[0].attributes.url);
  return (
    <div className="Products-item">
      <img src={`http://localhost:1337${product.image.data[0].attributes.url}`} alt={product.title} />
      <div className="Products-item-info">
        <h2>
          {product.title}
          <span>${product.price}</span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button type="button" onClick={() => handleAddToCart(product)}>
        Comprar
      </button>
    </div>
  );
}
