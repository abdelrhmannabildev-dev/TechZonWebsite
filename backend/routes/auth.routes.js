const {adminLogin}=require("../controllers/auth.controller");
const router = require("express").Router();

router.post("/",adminLogin);

module.exports = router;