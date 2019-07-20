const express = require("express"); //require express module
const app = express(); //instance of express


const cors = require("cors"); //require cor module
app.use(cors());

const dungeonsData = require("./routes/routes.js"); //require routes
app.use("/api", dungeonsData);

app.use(express.json());
app.use(express.static(__dirname + "/public"));

const port = 3000;

app.listen(port, () => console.log(`listening on port: ${port}`));