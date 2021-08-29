import React from "react";
import CartItem from "./CartItem";

export default function CartList({ value }) {
  const { cart } = value;
  console.log(value, cart);
  return (
    <div className="container-fluid">
        
      {cart.map((cartItem) => {
        return <CartItem key={cartItem.id} item={cartItem} value={value} />;
      })}
    </div>
  );
}
