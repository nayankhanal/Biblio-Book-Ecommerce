import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Button.css";


function BookUpload(props) {
    const [bookDetails, setBookDetails] = useState({
        bookTitle: "",
        description: "",
        image: null
    });

    function aboutProduct(event) {
        const { name, value, files } = event.target;

        setBookDetails((prevData) => {
            return {
                ...prevData,
                [name]: files ? files[0] : value
            }
        });

    }

    function postBookDetails() {

        const { bookTitle, description, image } = bookDetails;
        const formData = new FormData();
        formData.append("bookTitle", bookTitle);
        formData.append("description", description);
        formData.append("image", image);

        try {
            axios.post("http://localhost:8000/books", formData, { headers: { "Content-Type": "multipart/form-data", } })
                .then((res) => {
                    console.log(res);
                }).catch((err) => {
                    console.log(err);
                })
        } catch (error) {
            console.log("Couldn't post.");
        }

    }

    //book upload
    return (
        <>
            <input onChange={aboutProduct} name="bookTitle" type="text" placeholder="Product Title" />
            <textarea onChange={aboutProduct} name="description" rows="4" cols="50">
                Description about the product
            </textarea>
            <input type="file" name="image" onChange={aboutProduct} />
            <button onClick={postBookDetails} className="buy-button">Post</button>
        </>
    );

}

export default BookUpload;