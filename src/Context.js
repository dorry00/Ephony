import React, { Component } from "react";
import { detailProduct, storeProducts } from "./data";

const PhoneContext = React.createContext();

export default class PhoneProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalisOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const SingleItem = { ...item };
      tempProducts = [...tempProducts, SingleItem];
      console.log(tempProducts);
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  getItem = (id) => {
    const fetchedProduct = this.state.products.find((item) => item.id === id);
    return fetchedProduct;
  };

  handleDetail = (id) => {
    const fetchedProduct = this.getItem(id);
    this.setState(() => {
      return { detailProduct: fetchedProduct };
    });
  };
  addToCart = (id) => {
    let tempProducts = [...this.state.products];

    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotals();
      }
    );
  };
  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalisOpen: true };
    });
  };

  closeModal = (id) => {
    this.setState(() => {
      return { modalisOpen: false };
    });
  };
  increment = (id) => {
 let tempCart = [...this.state.cart];
 let selectedProducts = tempCart.find(item=>item.id === id);
 let index = tempCart.indexOf(selectedProducts);
 let product = tempCart[index];

 product.count = product.count + 1;
 product.total = product.count * product.price;
 this.setState(
   ()=>{
     return {
       cart:[...tempCart]
     }
   },
   ()=>{
     this.addTotals();
   }
 )
  };

  decrement = (id) => {
    let tempCart = [...this.state.cart];
 let selectedProducts = tempCart.find(item=>item.id === id);
 let index = tempCart.indexOf(selectedProducts);
 let product = tempCart[index];

 product.count = product.count - 1;
 if(product.count === 0){
   this.removeItem();
 }
 else{
   product.total = product.count * product.total;
 }
  };
  removeItem = (id) => {
   let tempProducts = [...this.state.products];
   let tempCart = [...this.state.cart];
   tempCart = tempCart.filter( item => item.id !== id);
   const index = tempProducts.indexOf(this.getItem(id));
   let removedProduct = tempProducts[index];
   removedProduct.inCart = false;
   removedProduct.count = 0;
   removedProduct.total = 0;
   
   this.setState(()=>{
     return{
       cart:[...tempCart],
       products:[...tempProducts]
     }

   },
   ()=>{
     this.addTotals();
   }
   )
  };
  clearCart = () => {
    this.setState(() => {
      return { cart:[]};
        
         
        
      },
        () => {
          this.setProducts();
          this.addTotals();
        }
      );
    
  };
  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    let tempTax = subTotal * 0.08;
    const Tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + Tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: Tax,
        cartTotal: total,
      };
    });
  };

  render() {
    return (
      <PhoneContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          closeModal: this.closeModal,
          openModal: this.openModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </PhoneContext.Provider>
    );
  }
}

const PhoneConsumer = PhoneContext.Consumer;

export { PhoneConsumer, PhoneProvider };
