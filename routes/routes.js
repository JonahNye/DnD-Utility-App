const express = require("express");
const dungeonsData = express.Router();
const pool = require("../connection"); //grabs exported pool instance

//general GET called by all PUTs
function refresh(res){
    pool.query("select * from funds order by id").then(result => {
        res.json(result.rows)
    })
}


//supplies routes
dungeonsData.get("/supplies", (req, res)=> {
    pool.query("select * from supplies order by id").then(result => {
        res.json(result.rows);
    })
})

//funds routes
dungeonsData.get("/funds", (req, res) => {
    pool.query("select * from funds").then(result => {
        res.json(result.rows);
    })
})

dungeonsData.put("/funds", (req, res) => {
    pool.query("update funds set balance=$1::int WHERE id=1",
     [req.body.balance] 
     ).then(() => {
        refresh(res);
    })
})

module.exports = dungeonsData;