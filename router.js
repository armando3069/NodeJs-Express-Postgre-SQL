const {Router} = require("express");
const database = require('./db');
const router = Router();
 
router.get('/',(req,res)=>{
 database.query("SELECT * FROM tabel1",(error,results)=>{
     if (error) throw error;
     res.status(200).json(results.rows);
 });
});

module.exports = router;