import React,{useEffect,useState} from "react";
import axios from "axios";
import "./styles/Sign.css"

function Sign(props){

    const [signinUser, setSigninUser] = useState({
        firstName: "",
        LastName: "",
        username: "",
        password: ""
    })

    function signinData(event){
        const {name,value} = event.target;
        setSigninUser((prevSigninUser) => {
            return {
                ...prevSigninUser,
                [name]: value
            }  
        })
    }

    function signinPush(){
        try {
            axios.post("https://localhost:8000/signup",{signinUser});
        } catch (error) {
            window.alert("Something went wrong");
        }
    }
    return(
    <div className="signinPage">
        <span className="title">Signup</span>
        <div className="signins">
            <input onChange={signinData} type="text" name="firstName" placeholder="First Name"/>
            <input onChange={signinData} type="text" name="LastName" placeholder="Last Name"/>
            <input onChange={signinData} type="email" name="username" placeholder="Email"/>
            <input onChange={signinData} type="password" name="password" placeholder="Password"/>
            <button className="signButton" onClick={signinPush}>Sign Up</button>
        </div>
    </div>
    );
    
}

export default Sign;