const homeRoutes = require("./home-routes.js");
const router = require("express").Router();


    
router.use("/api", homeRoutes);

module.exports = router;