// import logo from './logo.svg';
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './App.css';
import Log from './Log';
import Sign from "./Sign";
import LogDirect from "./LogDirect";
import Home from "./biblio/Home";
import About from "./biblio/About";
import Contact from "./biblio/Contact";
import Cart from "./biblio/Cart";
import BookUpload from "./biblio/BookUpload"

function App() {

  const [thisUser, setUser] = useState(JSON.parse(localStorage.getItem("theUser")) || null);

  function checkLogin(user) {
    localStorage.setItem("theUser", JSON.stringify(user));
    setUser(user);
  }



  function forceHome() {
    if (thisUser === null) {
      window.alert(document.referrer);
      if (document.referrer === "http://localhost:3000/home") {
        window.alert("Please login first");
      }
    }
  }


  //returning frontend
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LogDirect />} />
        <Route exact path="/login" element={<Log checkLogin={checkLogin} forceHome={forceHome} />} />
        <Route exact path="/signup" element={<Sign />} />
        <Route exact path="/home" element={thisUser && thisUser._id ? <Home /> : <Navigate to="/login" />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/bookupload" element={<BookUpload />} />
      </Routes>

    </div>
  );
}

export default App;
