const express = require("express");

const app = express();
app.use(express.json());

const port = 8081;

const todoList = ["learn", "apply things", "succed"];

app.get("/todos",(req,res) => {
    res.status(200).send(todoList);
});

app.post("/todos",(req,res) => {
    let newTodoList = req.body.name;
    todoList.push(newTodoList);
    res.status(201).send({message: "Task Added Successfully"});
})

app.delete("/todos",(req,res) => {
    const deleteThisItem = req.body.name;

    todoList.find((ele, index) => {
        if(ele === deleteThisItem) {
            todoList.splice(index, 1);
        }
        res.status(202).send({message : `Deleted item ${req.body.name}`});
    });
});

app.all("*",(req,res) => {
    res.status(501).send();
});

app.listen(port, () => {
    console.log(`NodeJS Server Started Running on Port ${port}`);
});
