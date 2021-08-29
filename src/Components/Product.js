import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PhoneConsumer } from "../Context";
import PropTypes from 'prop-types'


export default class Product extends Component {
  render() {
    const { id, img, inCart, title, price } = this.props.product;
    
    return (
      <ProductWrapper className="col-md-6 col-9 col-lg-3 mx-auto my-3">
        <div className="card">
          <PhoneConsumer>
            {value => (          
            <div className="img-container p-5 w-100 h-100" onClick={()=>value.handleDetail(id)}>
            <Link to="/details">
              <img
                src={img}
                alt="product"
                className="card-img-top"
                onClick = {() => {value.openModal(id);}}
                style={{
                  resizeMode: "contain",
                  height: 300,
                }}
              />
            </Link>
            <button
              className="card-btn"
              disabled={inCart ? true : false}
              onClick={() => {
               value.addToCart(id);
               value.openModal(id);
              }}
            >
              {inCart ? (
                <p className="text-capitalize mb-0" disabled="true">in cart</p>
              ) : (
                <i className="fa fa-cart-plus"></i>
              )}
            </button>
          </div>)}
            
          </PhoneConsumer>
          </div>
          


          <div className="d-flex card-footer justify-content-center">
              <p className="mb-0 align-self-center font-weight- bold text-dark">{title}</p>  
              <h5 className="text-blue font-italic mb-0"> $ <span>{price}</span></h5>
          </div>
        
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
    Product:PropTypes.shape({
        id:PropTypes.number.isRequired,
        img:PropTypes.string.isRequired,
        title:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
        inCart:PropTypes.bool.isRequired,
    })

}

const ProductWrapper = styled.div`

.card{
    border-color:transparent;
    transition:all 1s linear;
}
.card-footer{
    background:transparent;
    border-top:transparent;
    transition:all 1s linear;
    overflow:hidden;
    


}
&&hover{
    .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 0px , rgba(0,0,0,0.2);
    }
    .card-footer{
        background:brown;
    }
    .img-container{
        position:relative;
        overflow:hidden;
        
    }
    .card-img-top{
        transition:all 1s linear;
    }
    .img-container:hover .card-img-top{
      
       
        transform:scale(1.2);
        overflow:hidden;
    }
}

.card-btn{
    overflow:hidden;
    position:absolute; 
    bottom:0;
    right:0;
   
    background:var(--lightBlue);
    color:var(--mainWhite);
    font-size:1.4rem;
    padding:0.2rem 0.4rem;
    border-radius:0.5rem 0 0 0; 
    transform:translate(100%,100%);
    border:none;
}
.img-container:hover .card-btn{
    transform:translate(0,0);
    overflow:hidden;
    transition:all 1s linear;
}




`;




