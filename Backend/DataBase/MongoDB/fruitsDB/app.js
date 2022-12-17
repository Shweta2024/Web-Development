//CREATING FRUITS DATABASE

//require mongoose
const mongoose = require("mongoose");

//connect with mongodb
mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1:27017/FruitsDB");

//create schema
const fruitSchema = mongoose.Schema({
    name: String,
    review: Number
});

//create collection
const Fruit = mongoose.model("fruit", fruitSchema);

//create document
const apple = new Fruit({
    name: "Apple",
    review: 9
});

const mango = new Fruit({
    name: "Mango",
    review: 6
});

const orange = new Fruit({
    name: "Orange",
    review: 6
});

//add all the documents in the collection
Fruit.insertMany([apple, mango, orange]);