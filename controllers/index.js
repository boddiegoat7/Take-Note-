const homeRoutes = require("./home-routes.js");
const router = require("express").Router();
const apiRoutes = require("./api");


    
router.use("/", homeRoutes);
router.use("/api", apiRoutes);


module.exports = router;

//test push 