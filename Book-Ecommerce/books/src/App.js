// import logo from './logo.svg';
import {Route, Routes, useNavigate, navigare} from "react-router-dom";
import './App.css';
import Log from './Log';
import Sign from "./Sign";
import LogDirect from "./LogDirect";
import Home from "./biblio/Home";
import About from "./biblio/About";
import Contact from "./biblio/Contact";
import Cart from "./biblio/Cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LogDirect/>}/>
        <Route exact path="/login" element={<Log />}/>
        <Route exact path="/signup" element={<Sign />}/>
        <Route exact path="/home" element={<Home />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/contact" element={<Contact />}/>
        <Route exact path="/cart" element={<Cart />}/>
      </Routes>
      
    </div>
  );
}

export default App;
