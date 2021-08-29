import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Link } from "react-router-dom";

import { PhoneConsumer } from "../Context";

export default class Model extends Component {
  render() {
    return (
        <PhoneConsumer>
          {(value) => {
           const { openModal, closeModal } = value;
           const {modalisOpen} = value;
          console.log(openModal.modalisOpen)
          const { img, title, price } = value.modalProduct;

       if (!modalisOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto mb-0 p-5 col-md-6 col-lg-4 text-center text-capitalize"
                    >
                      <h4>item added to cart</h4>
                      <img
                         src={img}
                        className="img-fluid"
                        alt="product"
                        style={{
                          resizeMode: "contain",
                          height: 250,
                        }}
                      />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price : {price}</h5>
                      <Link to="/">
                        <Button
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          Continue Shopping
                        </Button>
                      </Link>
                      <Link to="/cart">
                        <Button
                          cart
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          View Cart
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            )
          }
        }}
      </PhoneConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  #modal {
    background: var(--mainWhite);
  }
`;
