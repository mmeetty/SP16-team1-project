var express = require("express");
var router = express.Router();

router.get("search", function(req, res){
<<<<<<< HEAD
    res.send("Hello World");
});

router.get("list", function(req, res){
    res.send("Hello World");
});

module.exports = router;
=======
   res.send("Hello World");
   console.log("Hello World");
});

router.get("list", function(req, res){
   res.send("Hello World");
   console.log("Hello World"); 
});
>>>>>>> origin/master
