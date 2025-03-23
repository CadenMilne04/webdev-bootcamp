//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect('mongodb+srv://cadenmilne04:PF4nYxO2XsiPYeiP@cluster0.ro1tpr1.mongodb.net/toodoListDB');

const itemsSchema = {
  name: String
};

const Item = mongoose.model("Item", itemsSchema)

const item1 = new Item({
  name: "Welcome to new List!"
});
const item2 = new Item({
  name: "<= Press this to Delete Item"
});
const item3 = new Item({
  name: "Type below to make new item!"
});

const defaultItems = [item1,item2,item3];

const listSchema = {
  name: String,
  items: [itemsSchema]
};

const List = mongoose.model("List", listSchema);


app.get("/", function(req, res) {

  Item.find({}).then(function(foundItems){
    
    if(foundItems.length === 0){
      Item.insertMany(defaultItems);
      res.redirect("/");
    }else{
      res.render("list", { listTitle: "Today", newListItems: foundItems });
    }
  })
  .catch(function(err){
    console.log(err);
  });

});

app.post("/", async function(req, res){

  const itemName = req.body.newItem;
  const listName = req.body.list;

  const item = new Item({
    name: itemName
  })

  if(listName === "Today"){
    item.save();
    res.redirect("/");
  } else {
    List.findOne({name: listName})
    .then(function(foundList){
      foundList.items.push(item);
      foundList.save();
      res.redirect("/"+listName);
    })
    .catch(function(err){
      console.log(err);
    });
  }
});

app.post("/delete", async function(req,res){
  const itemId = req.body.checkbox;
  const listName = req.body.listName;

  if(listName === "Today"){
    await Item.deleteOne({_id: itemId});
    res.redirect("/")
  } else {
    await List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: itemId}}})
    .then(function(){
      res.redirect("/"+listName);
    })
    .catch(function(err){
      console.log(err);
    });
  }
  
});

app.get("/:nameOfList", function(req,res){
  const listName = req.params.nameOfList;

  const list  = new List({
    name: listName,
    items: defaultItems
  });

  List.findOne({name: listName})
  .then(function(foundList){
    if(!foundList){
      //create new list
      const list  = new List({
        name: listName,
        items: defaultItems
      });

      list.save();

      res.redirect("/" +listName);
    }else{
      //show existing list
      res.render("list", {listTitle: foundList.name, newListItems: foundList.items})
    }
  })
  .catch(function(err){
    console.log(err);
  })
});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server started on port 3000");
});


//PW: PF4nYxO2XsiPYeiP