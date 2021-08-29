import React, { Component } from "react";
import { PhoneConsumer } from "../Context";
import { Link } from "react-router-dom";
import { Button } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <PhoneConsumer>
        {(value) => {
          const { id, price, inCart, img, info, company, title } =
            value.detailProduct;

          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 text-blue text-center my-5 text-slanted mx-auto">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-10 my-3">
                  <img
                    src={img}
                    className="img-fluid"
                    alt="detailsimg"
                    style={{ resizeMode: "contain", height: 300 }}
                  />
                </div>
                <div className="col-10 mx-auto col-md-10 my-3 text-capitalize ">
                  <h1>model:{title}</h1>
                  <h4 className="text-title text-muted mt-3 mb-2">
                    This is made by:{" "}
                    <span className="text-capital">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price: <span>$</span> {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mb-0 mt-3">
                    Some info about our product
                  </p>
                  <p className="text-muted lead">{info}</p>

                  <div>
                    <Link to="/">
                      <Button>Back To Products</Button>
                    </Link>
                    <Button
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                      }}
                    >
                      {inCart ? "In Cart" : "Add to Cart"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </PhoneConsumer>
    );
  }
}
