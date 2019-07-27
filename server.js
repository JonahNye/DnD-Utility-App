const express = require("express"); //require express module
const app = express(); //instance of express
const router = require("./routes/routes.js"); //require routes

var bodyParser = require("body-parser");
app.use(bodyParser.json());

const cors = require("cors"); //require cor module
app.use(cors({
    
}));





app.use("/api", router);
app.use(express.static(__dirname + "/public"));



const port = 3000;

app.listen(port, () => console.log(`listening on port: ${port}`));