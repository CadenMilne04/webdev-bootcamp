const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://cadenmilne04:PF4nYxO2XsiPYeiP@cluster0.ro1tpr1.mongodb.net/wikiDB");

const articleSchema = {
    title: String,
    content: String
}

const Article = mongoose.model("Article", articleSchema);

//MAKE IT RESTFUL!
app.route("/articles")
    .get(function(req, res){
        Article.find({})
            .then(function(foundArticles){
                res.send(foundArticles);
            })
            .catch(function(err){
                res.send(err);
            });
    })
    .post(function(req, res){
        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        });

        newArticle.save()
            .then(user => res.send('Article Added!'))
            .catch(err => res.send(err));
    })
    .delete(function(req, res){
        Article.deleteMany({})
            .then(function(){
                res.send("Deleted All");
            })
            .catch(function(err){
                res.send(err);
            });
    });
app.route("/articles/:articleTitle")
    .get(function(req, res){
        Article.findOne({title: req.params.articleTitle})
            .then(function(foundArticle){
                res.send(foundArticle);
            })
            .catch(function(err){
                res.send(err);
            });
    })
    .put(function(req, res){
        Article.updateOne(
            {title: req.params.articleTitle}, 
            {title: req.body.title,
             content: req.body.content}
            )
            .then(function(updatedArticle){
                res.send("Updated to: " + updatedArticle)
            })
            .catch(function(err){
                res.send(err);
            });
    })
    .patch(function(req, res){
        Article.updateOne(
            {title: req.params.articleTitle},
            {$set: req.body}
            )
            .then(function(updatedArticle){
                res.send("Updated It");
            })
            .catch(function(err){
                res.send(err)});
    })
    .delete(function(req, res){
        Article.deleteOne({title: req.params.articleTitle})
            .then(function(deletedArticle){
                res.send("All gone!");
            })
            .catch(err => res.send(err));
    });


app.listen(3000, function() {
  console.log("Server started on port 3000");
});