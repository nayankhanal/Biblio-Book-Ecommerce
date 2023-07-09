import React, {useState,useEffect} from "react";
import {Link,NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import "../styles/Header.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import "../styles/Tooltip.css"

function Header(){

    const navigate = useNavigate();
    return(<>
        <header className="top">
            <nav className="navigation">
                <h2 onClick={() =>{navigate("/home")}} className="hometitle navline">bibliO</h2>
                <NavLink to="/home" className="navitems navline">Home</NavLink>
                <NavLink to="/books" className="navitems navline">Books</NavLink>
                <NavLink to="/about" className="navitems navline">About Us</NavLink>
                <NavLink to="/contact" className="navitems navline">Contact Us</NavLink>
                <div className="right-navline">
                  <NavLink to="/cart" className="right-nav"><ShoppingCartIcon/><span class="tooltiptext">Cart</span></NavLink>
                  <NavLink to="/profile" className="right-nav"><AccountBoxIcon/><span class="tooltiptext">Profile</span></NavLink>                
                </div>
            </nav>   
        </header>
    </>

    );
}

export default Header;