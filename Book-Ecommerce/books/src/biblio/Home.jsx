import React, {useState,useEffect} from "react";
import {Link,NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import "../styles/Home.css";
import bgbook from "../images/bgbook6.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Header from "./Header";
import Footer from "./Footer";
import Sections from "./Sections";

function Home(){

    const navigate = useNavigate();
    return(<>
    <Header/>
        <img className="bgimg" src={bgbook} alt="nobg"/>
        <Sections/>
        <Footer/>
    </>

    );
}

export default Home;