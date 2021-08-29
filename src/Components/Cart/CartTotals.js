import React from "react";
import { Link } from "react-router-dom";
import PaypalButton from "./PaypalButton"

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2 mt-sm-5 text-capitalize ml-md-auto col-sm-8 text-right">
            <Link to="/">
              <button
                className="mb-3 btn btn-outline-danger px-5 text-capitalize"
                type="button"
                onClick={()=>clearCart()}
              >
                clear cart
              </button>
            </Link>
            <div className="my-5">
            <h5  className="mt-0">
              <span className="text-title  btn btn-outline-none mb-3">
                subtotal: $ <strong>{cartSubTotal}</strong>
              </span>
            </h5>
            <h5  className="mt-3">
              <span className="text-title btn btn-outline-none my-4 ">
                Tax: $ <strong>{cartTax}</strong>
              </span>
            </h5>
            <h5 className="mt-5 ">
              <span className="text-title btn btn-outline-none my-5">
                Total: $ <strong>{cartTotal}</strong>
              </span>
            </h5>
            <PaypalButton/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
