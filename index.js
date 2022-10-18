z//import 
const bodyParser = require("body-parser");
const express = require("express");
const route = require('./route/record');
const app = express();

//middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//routes
app.use('/records',route);





//check connection in our server
const port = 8081;
app.listen(port, ()=>{
    console.log(`The server is now rnunning in the port: ${port}`);
});