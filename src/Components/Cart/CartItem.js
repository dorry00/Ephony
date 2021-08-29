import React from "react";

export default function CartItem({ item, value }) {
  const { id, img, title, price, count, total } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          className="img-fluid"
          alt="cartImage"
          style={{ width: "5rem", height: "5rem" ,resizeMode: "contain", }}
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product:</span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Price:</span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 ">
        <div className="d-flex justify-content-center mx-auto">
          <div>
            <span className="btn btn-black mr-5" onClick={() => decrement(id)}>
              -
            </span>
            <span className="btn btn-black mx-5">{count}</span>
            <span className="btn btn-black mx-1 " onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
          <div className="cart-icon" onClick={()=>removeItem(id)}>
              <i className="fas fa-trash"></i>
          </div>
          </div>
     
      <div className="col-10 mx-auto col-lg-2">
      <span className="d-lg-none">total:</span>
          {total}
      </div>
    </div>
  );
}
