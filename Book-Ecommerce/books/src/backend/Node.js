//Importing rewquired modules
const express = require("express");
const app = express();
const session = require('express-session');
const { signupModel } = require("./database-auth.js");
const passport = require("passport");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRound = 10;
const LocalAuth = require("./authentication.js");
const {BookModel} = require("./database-books.js");
const cors = require('cors');
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
// const fs = require("fs");

//Use of Middleware
// app.use(LocalAuth);
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
}));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/usersDB",{useNewUrlParser: true});



//Home get API
app.get("/", (req, res) => {
    res.send("<h1>Hello from 8000</h1>");
})


//Sign Up API (sign up for new user)
app.post("/signup", (req, res) => {

    const { firstName, lastName, username, password } = req.body.signinUser;

    signupModel.findOne({ username }, (err, found) => {
        if (err) {
            console.log(err);
        } else {
            if (!found) {
                bcrypt(password, saltRound, (err, hash) => {
                    const newUser = new signupModel({
                        firstName,
                        lastName,
                        username,
                        password: hash
                    })
                    try {
                        newUser.save();
                        res.send({ message: "Done" });
                        console.log("New user saved");
                    } catch (error) {
                        console.log("Signup failed");
                        console.log(error);
                    }
                })
            } else {
                console.log("Email already used");
            }
        }
    })

})


//Sign Up API (sign up for new user)
app.post("/login",
    passport.authenticate('local'),
    (req, res) => {
        res.send(req.user);
    });


app.post("/books",upload.single("image"), async (req, res) => {
    const { bookTitle, description } = req.body;
    const image = req.file;

    const binaryValue = Buffer.from(image.buffer, "hex");
    // console.log(binaryValue);
    const base64EncodedData = binaryValue.toString("base64");
    // console.log(base64EncodedData);

    const bookie = { bookTitle, description, base64EncodedData }
    console.log(bookie);

    // const bImage = fs.readFileSync(image);
    try {
        const newBook = new BookModel({
            bookTitle,
            description,
            image: {
                data: base64EncodedData,
                contentType: "image/jpeg"
              }
        })

        console.log(newBook);
        await newBook.save();
        
    } catch (error) {
        console.log(error);
    }



    // res.redirect("/books");
    // newBook.image.data = imageData;
    // newBook.image.contentType = 'image/jpeg';

})

app.get("/books",async (req,res)=>{
    // res.send("<h1>Hello from 8000/books</h1>");
    console.log("ok ok");
    try {
        const bookss = await BookModel.find().lean();
        res.send(bookss);
        console.log(bookss);
    } catch (error) {
        res.send(error);
    }
    
});


//Creating a local server
app.listen(8000, (req, res) => {
    console.log("Successfully run.");
});
