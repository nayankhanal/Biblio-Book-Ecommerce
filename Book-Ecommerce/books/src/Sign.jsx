import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/Sign.css";
import { useNavigate } from "react-router-dom";


function Sign(props) {

    const navigate = useNavigate();

    const [signinUser, setSigninUser] = useState({
        firstName: "",
        LastName: "",
        username: "",
        password: ""
    })

    function signinData(event) {
        const { name, value } = event.target;
        setSigninUser((prevSigninUser) => {
            return {
                ...prevSigninUser,
                [name]: value
            }
        })
    }

    function signinPush() {
        try {
            axios.post("https://localhost:8000/signup", { signinUser })
                .then((res) => {
                    if (res.message === "Done") {
                        navigate("/login");
                    } else {
                        navigate("/signup");
                    }
                }).catch((err) => {
                    navigate("/signup");
                    window.alert("Something went wrong.Please try again.");
                })
        } catch (error) {
            window.alert("Something went wrong");
        }
    }

    //returning frontend
    return (
        <div className="signinPage">
            <span className="title">Signup</span>
            <div className="signins">
                <input onChange={signinData} type="text" name="firstName" placeholder="First Name" />
                <input onChange={signinData} type="text" name="LastName" placeholder="Last Name" />
                <input onChange={signinData} type="email" name="username" placeholder="Email" />
                <input onChange={signinData} type="password" name="password" placeholder="Password" />
                <button className="signButton" onClick={signinPush}>Sign Up</button>
            </div>
        </div>
    );

}

export default Sign;