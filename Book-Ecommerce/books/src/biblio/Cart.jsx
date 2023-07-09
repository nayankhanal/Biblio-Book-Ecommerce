import React,{useState,useEffect} from "react";
import "../styles/Cart.css";
import {Link,NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";



function Cart(){

    const navigate = useNavigate();

    return(<>
        <Header/>
        <section className="cart-section">
            <h2 className="cart-title">Cart</h2>
        </section>
        <Footer/>
    </>

    );
}

export default Cart;