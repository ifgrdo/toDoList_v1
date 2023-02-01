const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

const itemArray = ["Buy food", "Cook food", "Eat food"];
const workArray = [];



app.get("/", (req, res) => {
    
    res.render("todolist", { 
        listTitle: date.getDate(),
        items: itemArray
    });
});

app.get("/work", (req, res) => {

    res.render("todolist", { 
        listTitle: "Work list",
        items: workArray
    });
});

app.get("/about", (req, res) => {

    res.render("about");
});



app.post("/", (req, res) => {

    let newItem = req.body.item;

    if(req.body.list == "Work"){
        workArray.push(newItem);
        res.redirect("/work");
    } 
    else {
        itemArray.push(newItem);
        res.redirect("/");
    }
});



app.listen(3000, () => {
    console.log("server started on port 3000");
});