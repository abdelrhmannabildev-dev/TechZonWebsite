const {makeOrder}=require("../controllers/order.controller")
const router = require("express").Router();

router.post("/",makeOrder);

module.exports = router;