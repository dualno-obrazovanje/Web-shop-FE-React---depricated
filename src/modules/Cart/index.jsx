import React from "react";
import "./style.scss"
import ProductTile from "./ProductTile";

const Cart = ({ cartItems }) => {
  return (
    <div className="ws-cart-modal-container">
      <div className="flex-container">
        <div className="flex-child-list-of-products">
          <div className="ws-cart-modal-exit">
            <p>{`< Continue Shoping`}</p>
          </div>
          <div className="ws-cart-modal-header-description">
            <p>{`Shopping cart`}</p>
            <p>{`you have ${cartItems.length} ${cartItems.length > 1 ? 'items' : 'item'} in your cart`}</p>
          </div>
          <div className="ws-cart-modal-added-products-container">
            {cartItems.map((item) =>
              <ProductTile product={item} />
            )}
          </div>
        </div>
        <div className="flex-child-card-details">
          <div></div>
        </div>
        <div className="flex-child-pay-on-delivery">
          <div></div>
        </div>
      </div>

    </div>
  );
};

export default Cart;