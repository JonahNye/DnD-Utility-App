const express = require("express");
const dungeonsData = express.Router();
const pool = require("../connection"); //grabs exported pool instance


//_-_-_-_-_-_-_-_-_-_-     LOG REQUESTS    -_-_-_-_-_-_-_-_-_-_-//



// ******  *****  supplies routes  *****   *****///
dungeonsData.get("/supplies", (req, res) => {
    pool.query("select * from supplies order by id").then(result => {
        res.json(result.rows);
    })
})


// ******    ******    funds routes   ****   ****///

function refreshFunds(res) {
    dungeonsData.get("/funds", (req, res) => {
        pool.query("select * from funds").then(result => {
            res.json(result.rows);
        })
    })
}

dungeonsData.get("/funds", (req, res) => {
    pool.query("select * from funds").then(result => {
        res.json(result.rows);
    })
})


dungeonsData.put("/funds/:id", (req, res) => {
    pool.query("update funds set balance=$1::int WHERE id=1",
        [req.body.newBalance]
    ).then(() => {
        refreshFunds(res);
    })
})



//_-_-_-_-_-_-_-_-_-_-_   BOARD REQUESTS    -_-_-_-_-_-_-_-_-_-_-//

function refreshCreatures(res) {
    dungeonsData.get("/creatures", (req, res) => {
        pool.query("select * from creatures").then(result => {
            res.json(result.rows);
        })
    })
}

dungeonsData.get("/creatures", (req, res) => {
    pool.query("select * from creatures").then(result => {
        res.json(result.rows);
    })
})

dungeonsData.post("/creatures", (req, res) => {
    pool.query("insert into creatures (creature, classification, exp, cr) values ($1::text, $2::text, $3::int, $4::int)", [
        req.body.creature,
        req.body.classification,
        req.body.exp,
        req.body.cr
    ]).then(() => {
        refreshCreatures(res);
    });
});


module.exports = dungeonsData;