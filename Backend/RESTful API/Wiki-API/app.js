const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set("view engine", "ejs");

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1:27017/wikiDB");

const articleSchema = mongoose.Schema({
    title: String,
    content: String
});

const Article = mongoose.model("article", articleSchema);


/*  app.route("/example").get().post().delete();  */

app.route("/articles")
    //read all articles
    .get(function (req, res) {
        Article.find({}, function (err, result) {
            if (!err)
                res.send(result);
            else
                res.send(err);
        });
    })

    //create an article
    .post(function (req, res) {
        const article = Article({
            title: req.body.title,
            content: req.body.content
        });
        article.save(function (err) {
            if (err)
                res.send(err);
            else
                res.send("successfully added an article!");
        });
    })

    //delete all articles
    .delete(function (req, res) {
        Article.deleteMany({}, function (err) {
            if (err)
                res.send(err);
            else
                res.send("successfully deleted all the articles!");
        })
    });


app.route("/articles/:selectedArticle")
    .get(function (req, res) {
        Article.findOne({ title: req.params.selectedArticle }, function (err, result) {
            if (!result)
                res.send("no articles with that title found!");
            else
                res.send(result);
        })
    })

    //collection.replaceOne(condtions,updates,callback);
    .put(function (req, res) {
        Article.replaceOne(
            { title: req.params.selectedArticle },
            { title: req.body.title, content: req.body.content },
            function (err) {
                if (!err)
                    res.send("successfully replaced an article!");
            });
    })

    //updateOne(conditions,{$set:updates},callback)
    .patch(function (req, res) {
        Article.updateOne(
            { title: req.params.title },
            { $set: req.body },
            function (err) {
                if (!err)
                    res.send("successfully updated an article!");
            }
        );
    })

    .delete(function (req, res) {
        Article.deleteOne({ title: req.params.selectedArticle }, function (err) {
            if (!err)
                res.send("successfully deleted an article!");
        });
    });


app.listen(5000, function (req, res) {
    console.log("server started at port : 5000");
});