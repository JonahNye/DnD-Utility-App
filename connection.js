const { Pool } = require("pg"); 
const credentials = new Pool({   
    user: "postgres",   
    password: "password",   
    host: "localhost",   
    port: 5432,   
    database: "D&D",   
    ssl: false 
    }); 
 
    module.exports = credentials


    //or line 2 : const { Pool } = require("pg");



    //linne 11 : module.exports = new Pool(credentials)