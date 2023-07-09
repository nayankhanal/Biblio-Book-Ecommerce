import React,{useEffect,useState} from "react";
import axios from "axios";
import "./styles/Log.css"

function Log(props){

    const [loginUser, setLoginUser] = useState({
        username: "",
        password: ""
    })

    function loginData(event){
        const {name,value} = event.target;
        setLoginUser((prevLoginUser) => {
            return {
                ...prevLoginUser,
                [name]: value
            }  
        })
    }

    function loginPush(){
        try {
            axios.post("https://localhost:8000/login",{loginUser});
        } catch (error) {
            window.alert("Please enter correct username or password");
        }
    }
    return(
    <div className="loginPage">
        <span className="title">Login</span>
        <div className="logins">
            <input onChange={loginData} type="text" name="username" placeholder="Email"/>
            <input onChange={loginData} type="password" name="password" placeholder="Password"/>
            <button className="logButton" onClick={loginPush}>Log In</button>
        </div>
    </div>
    );
    
}

export default Log;