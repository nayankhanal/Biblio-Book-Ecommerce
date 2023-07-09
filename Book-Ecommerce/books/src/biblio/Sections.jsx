import React,{useState,useEffect} from "react";
import "../styles/About.css";
import "../styles/Sections.css";
import section2 from "../images/bgbook7.jpg";
import section3 from "../images/bgbook8.jpg";
import section4 from "../images/bgbook9.jpg";
import {Link,NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import "../styles/Button.css"


function Sections(){

    const navigate = useNavigate();

    return(<>
    <section className="section-second">
            <div className="section-second-div">
                <div className="section-second-div-item section-second-left-div">
                    <p className="section-paragraph">Education is the key that unlocks the doors of knowledge and opportunity. It empowers individuals to broaden their horizons, develop critical thinking skills, and discover their passions. Books, as invaluable companions on the journey of education, are portals to worlds both real and imagined. They carry the wisdom of countless generations, inviting us to explore, learn, and grow. Together, education and books nurture our minds, ignite our imaginations, and pave the way for a brighter future.</p>
                    <button onClick={() =>{navigate("/books")}} className="buy-button">Buy Now</button>
                </div>
                <div className="section-second-div-item section-second-right-div">
                    <img className="section-second-img" alt="bookandcoffee" src={section2}/>
                </div>
            </div>

        </section>
        <section className="section-second">
            <div className="section-second-div">
                <div className="section-second-div-item section-second-right-div">
                    <img className="section-second-img" alt="bookandcoffee" src={section3}/>
                </div>
                <div className="section-second-div-item section-second-left-div">
                    <p className="section-paragraph">Education and books are inseparable partners in the pursuit of knowledge. Education provides the foundation for learning, while books serve as the vessels of wisdom and inspiration. Through education, we gain the tools to navigate the complexities of the world, and books become our guides, illuminating new perspectives and sparking curiosity. Together, education and books empower us to question, to explore, and to constantly seek personal and intellectual growth. They are the catalysts that fuel our intellectual journey and shape us into lifelong learners.</p>
                    <button onClick={() =>{navigate("/books")}} className="buy-button">Buy Now</button>
                </div>

            </div>

        </section>
        <section className="section-second">
            <div className="section-second-div">
                <div className="section-second-div-item section-second-left-div">
                    <p className="section-paragraph">Education is the key that unlocks the doors of knowledge and opportunity. It empowers individuals to broaden their horizons, develop critical thinking skills, and discover their passions. Books, as invaluable companions on the journey of education, are portals to worlds both real and imagined. They carry the wisdom of countless generations, inviting us to explore, learn, and grow. Together, education and books nurture our minds, ignite our imaginations, and pave the way for a brighter future.</p>
                    <button onClick={() =>{navigate("/books")}} className="buy-button">Buy Now</button>
                </div>
                <div className="section-second-div-item section-second-right-div">
                    <img className="section-second-img" alt="bookandcoffee" src={section4}/>
                </div>
            </div>

        </section>
   </>

    );
}

export default Sections;