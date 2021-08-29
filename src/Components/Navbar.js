import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.svg'
import styled from 'styled-components'
import { Button } from './Button'

export default class Navbar extends Component {
    render() {
        return (
           <NavWraper className="navbar navbar-expand-sm navbar-dark px-sm-5 ">
               <Link to="/" >
                   <img src={logo} alt="logo" className='navbar-brand '/>
                   
               </Link>
                   <ul className="navbar-nav align-items-center">
                       <li className="nav-item ml-5">
                           <Link to='/' className='nav-link'>E-phony</Link>
                       </li>
                       
                   </ul>
                   <Link to="/cart" className="mr-5 btn">
                       <Button >
                           <span className="mr-2">
                           <i className="fa fa-cart-plus text-light"/>
                           </span>my cart</Button>
                   </Link>

           </NavWraper>
        )
    }
}

const NavWraper = styled.nav`
background:var(--mainBlue);
.nav-link {
font-size:1.3rem; 
color:var(--mainWhite) !important;
text-transform:capitalize ;
} 
`;



