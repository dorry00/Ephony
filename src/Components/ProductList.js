import React, { Component } from 'react'
import Title from './Title'

import { PhoneConsumer } from '../Context'
import Product from '../Components/Product'


export default class ProductList extends Component {
    
    
    render() {
        return (
            <>
            <div className="py-5">
                <div className="container">
                <Title name="our" title="products"/>
                    <div className="row">
                        <PhoneConsumer>
                            {
                                (value)=>{
                                    console.log(value.products)
                                                                        
                                 return value.products.map(product =>{
                                     return <Product key={product.id} product={product}/>
                                 })
                                    
                                }
                            }
                        </PhoneConsumer>
                        </div>
                        
                   

                </div>
            </div>
            </>
        )
    }
}
