import React from "react";

export default function CartColumns() {
  return (
    <div className="container text-center   ">
      <div className="row">
        <div className="mx-auto col-10 col-lg-2">
          <p className="text-uppercase">Products</p>
        </div>

        <div className="mx-auto col-10 col-lg-2">
          <p className="text-uppercase">name of products</p>
        </div>

        <div className="mx-auto col-10 col-lg-2">
          <p className="text-uppercase">price</p>
        </div>

        <div className="mx-auto col-10 col-lg-2">
          <p className="text-uppercase">quantity</p>
        </div>

        <div className="mx-auto col-10 col-lg-2">
          <p className="text-uppercase">remove</p>
        </div>
        <div className="mx-auto col-10 col-lg-2">
          <p className="text-uppercase">total</p>
        </div>
      </div>
    </div>
  );
}
