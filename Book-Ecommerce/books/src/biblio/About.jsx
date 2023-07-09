import React,{useState,useEffect} from "react";
import "../styles/About.css";
import {Link,NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Header from "./Header";
import "../styles/Button.css"
import Footer from "./Footer";



function About(){

    const navigate = useNavigate();

    return(<>
    <Header/>
        <section className="about-section">
            <h2 className="about-title">About Us</h2>
            <p className="about-paragraph">
Welcome to Biblio, your one-stop destination for all things books! We are passionate about connecting book lovers with their next great read. With a carefully curated selection of new releases, bestsellers, classics, and niche titles, we strive to cater to every reader's taste. Whether you're seeking a thrilling adventure, an insightful biography, or a heartwarming romance, Biblio has something for everyone. We believe in the power of stories to inspire, educate, and entertain, and we are here to help you embark on your literary journey. Happy reading with Biblio!</p>
        </section>
        <button onClick={() =>{navigate("/books")}} className="buy-button">Buy Now</button>
        <Footer/>
    </>

    );
}

export default About;