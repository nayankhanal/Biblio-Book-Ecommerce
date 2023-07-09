import React,{useState,useEffect} from "react";
import "../styles/Contact.css"
import {Link,NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


function Contact(){

    const navigate = useNavigate();

    return(<>
        <Header/>
            <section className="contact-section">
                <h2 className="contact-title">Contact Us</h2>
                <p className="contact-paragraph">
                We would love to hear from you! If you have any questions, feedback, or inquiries, please don't hesitate to get in touch with us. You can reach our friendly team by sending an email to <strong>nayandondaju@gmail.com</strong>. We strive to respond to all messages promptly and provide you with the assistance you need. Your satisfaction is our top priority, and we are here to make your experience with Biblio as smooth and enjoyable as possible. We look forward to hearing from you!</p>
            </section>
            <button onClick={() =>{navigate("/books")}} className="buy-button">Buy Now</button>
            <Footer/>
        </>
    );
}

export default Contact;