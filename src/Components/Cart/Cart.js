import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { PhoneConsumer } from "../../Context";
import CartList from "./CartList";
import CartTotals from "./CartTotals"

export default class Cart extends Component {
  render() {
    return (
      <section>
        <PhoneConsumer>
          {(value) => {
            const { cart } = value;
          console.log(value);


            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value}/>
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </PhoneConsumer>
      </section>
    );
  }
}
