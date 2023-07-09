import React,{useState,useEffect} from "react";
import {Link,NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import "../styles/Button.css"
import "../styles/Footer.css";
import "../styles/Home.css"


function Footer(){

    const navigate = useNavigate();

    return(<>
        <section className="footer">
        <div className="footer-content">
            <div className="footer-content-first">
                <ul className="footer-list">
                    <li className="footer-links"><NavLink className="footer-navlink" to="/home">Home</NavLink></li>
                    <li className="footer-links"><NavLink className="footer-navlink" to="/books">Books</NavLink></li>
                    <li className="footer-links"><NavLink className="footer-navlink" to="/about">About Us</NavLink></li>
                    <li className="footer-links"><NavLink className="footer-navlink" to="/contact">Contact Us</NavLink></li>
                </ul>
                <h2 className="hometitle footerlogo">bibliO</h2>
                <p className="copyright">copyright © 2023 </p>
            </div>
            <div></div>
        </div>

        </section>
    </>

    );
}

export default Footer;