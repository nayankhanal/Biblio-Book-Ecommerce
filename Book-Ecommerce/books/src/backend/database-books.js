const mongoose = require("mongoose");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("find-or-create-mongoose");

mongoose.connect("mongodb://localhost:27017/userDB", { useNewUrlParser: true });

const bookSchema = new mongoose.Schema({
    bookTitle: { type: String, required: true },
    description: { type: String, required: true },
    image: { data: Buffer, contentType: String }
});

bookSchema.plugin(passportLocalMongoose);
bookSchema.plugin(findOrCreate);

const BookModel = mongoose.model("Books", bookSchema);

module.exports = { BookModel }