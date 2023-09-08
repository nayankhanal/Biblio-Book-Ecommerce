import React,{useState,useEffect} from "react";
import "../styles/Contact.css"
import {Link,NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";


function Books(){

    const [pustaks,setPustaks] = useState([]);

    function getBooks() {
        try {
            axios.get("http://localhost:8000/books")
            .then(kitabs => {
                console.log(kitabs.data);
                setPustaks(kitabs.data);
            })
            console.log(pustaks);
         } catch (error) {
             console.log(error);
         }
            console.log(pustaks);
    }

    useEffect(() => {
        getBooks();
    },[])


    const navigate = useNavigate();

    return(<>
        <Header/>
            <section className="contact-section">
                <h2 className="contact-title">Books</h2>
            </section>

            <div>
                {pustaks.map((items) => (
                    <div>
                        <h3>{items.bookTitle}</h3>
                        <p>{items.description}</p>
                        {items.image ? <img src={"data:" + items.image.contentType +";base64,"+ items.image.data} alt="productPic"/> : null}
                        
                    </div>
                ))}
            </div>

            {/* <Footer/> */}
        </>
    );
}

export default Books;