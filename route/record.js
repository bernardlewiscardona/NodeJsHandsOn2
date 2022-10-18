const express = require('express');
const dataConnection = express.Router();
let data = [
    { id: 1, title: 'Create a project',  order: 1, completed: true, author: 'Diego Laura' },
    { id: 2, title: 'Take a cofféé',     order: 2, completed: true, author: 'Laong-Laan' },
    { id: 3, title: 'Write new article', order: 3, completed: true, author: 'Agap-ito Bagumbayan' },
    { id: 4, title: 'Walk toward home', order: 4, completed: false, author: 'Taga-Ilog' },
    { id: 5, title: 'Have some dinner', order: 5, completed: false, author: 'Dimas-Ilaw' },
];
//get all data in a static container
dataConnection.get('/getData',(req,res)=>{
res.status(200).send(data);
console.log("Data is succefully fetch!");

});
//get all data by id
dataConnection.get('/getData/:id',(req,res)=>{
    let check = data.find((item)=>{
        return item.id === parseInt(req.params.id)
    })
    if(check){
        res.status(200).json(check);
    }
    else{
        res.status(404).send("ID does not exist!");
    }
});
//Add new data in the object
dataConnection.post('/postData',(req, res)=>{
    let body = req.body;
    console.log('Data from the user is: ${body}');
    data.push(body);
    res.status(200).send(body);
});

dataConnection.put('/updateData/:id',(req, res)=>{
    let id = +req.params.id;
    let body = req.body;
    let numId = data.findIndex((df)=>df.id === id);
    if(numId >= 0){
        let update = {id:id, ...body};
        data[numId] = update;
        res.json(update);
        console.log(update);
    }
    else{
        res.status(404).send('ID Does Not Exit');
    }
});

dataConnection.delete('/deleteData/:id',(req, res)=>{
    let id = +req.params.id;
    let numId = data.findIndex((df)=>df.id === id);
    if(numId >= 0){
        data.splice(numId, 1);
        res.status(200).send('Data with id ${numId} is gone');
    }
    else{
        res.status(404).send('ID Does Not Exit');
    }
});
module.exports = dataConnection;