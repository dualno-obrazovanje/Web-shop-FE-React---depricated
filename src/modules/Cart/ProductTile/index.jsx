import React from "react";
import "./style.scss"

const ProductTile = ({ product }) => {
  return (
    <div className="ws-product-tile-container">
      <img src="" alt="" />
      {product.name}
      {product.category}
      {product.quantity}
      <button>{'^'}</button>
      <button>{'V'}</button>
      {product.price * product.quantity}
      <button>DELETE</button>
    </div>
  );
};

export default ProductTile;