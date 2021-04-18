const express = require("express");

const router = express.Router();
router.get('/', (req,res)=>{

    res.render('ourservices')

});
module.exports = router