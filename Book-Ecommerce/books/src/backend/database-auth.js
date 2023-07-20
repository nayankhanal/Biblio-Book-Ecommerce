const mongoose = require("mongoose");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("find-or-create-mongoose");

mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser: true});

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const SignupModel = mongoose.model("SignupUser",userSchema); 

module.exports = {SignupModel}