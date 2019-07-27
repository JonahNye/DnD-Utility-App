const express = require("express");
const router = express.Router();
const pool = require("../connection"); //grabs exported pool instance


//_-_-_-_-_-_-_-_-_-_-   _-_-_-_-_-_-_-_-_-_-     LOG REQUESTS     _-_-_-_-_-_-_-_-_-_-   -_-_-_-_-_-_-_-_-_-_-//



// ******  *****  supplies routes  *****   *****///
router.get("/supplies", (req, res) => {
    pool.query("select * from supplies order by id").then(result => {
        res.json(result.rows);
    })
})


// ******    ******    funds routes   ****   ****///

function refreshFunds(res) {
    router.get("/funds", (req, res) => {
        pool.query("select * from funds").then(result => {
            res.json(result.rows);
        })
    })
}

router.get("/funds", (req, res) => {
    pool.query("select * from funds").then(result => {
        res.json(result.rows);
    })
})


router.post("/funds", (req, res) => {
    pool.query("insert into funds (balance) values ($1::int)",
        [req.body.newBalance]
    ).then(() => {
        refreshFunds(res);
    })
})



//_-_-_-_-_-_-_-_-_-_-_   _-_-_-_-_-_-_-_-_-_-  BOARD REQUESTS   _-_-_-_-_-_-_-_-_-_-  -_-_-_-_-_-_-_-_-_-_-//

function refreshCreatures(res) {
    router.get("/creatures", (req, res) => {
        pool.query("select * from creatures").then(result => {
            res.json(result.rows);
        })
    })
}

router.get("/creatures", (req, res) => {
    pool.query("select * from creatures").then(result => {
        res.json(result.rows);
    })
})

router.post("/creatures", (req, res) => {
    console.log(req.body);
    pool.query("insert into creatures (creature, classification, exp, cr) values ($1::text, $2::text, $3::int, $4::numeric)", [
        req.body.creature,
        req.body.classification,
        req.body.exp,
        req.body.cr
    ]).then(() => {
        refreshCreatures(res);
    });
});


module.exports = router;