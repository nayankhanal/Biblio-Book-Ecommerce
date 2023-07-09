import React,{useState,useEffect} from "react";
import styles from "./styles/LogDirect.module.css";
import {useNavigate} from "react-router-dom";

function LogDirect(props){
    const navigate = useNavigate();

    function navLog() {
        navigate("/login");
    }

    function navSign() {
        navigate("/signup");
    }

    return(
        <div>
            <h1 className={styles.title}>bibliO</h1>
            <button className={styles.button} onClick={navLog}>Log In</button>
            <button className={styles.button} onClick={navSign}>Sign Up</button>
        </div>
    );
}

export default LogDirect;