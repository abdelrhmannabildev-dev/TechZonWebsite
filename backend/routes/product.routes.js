const {getAllProducts,getProductById}= require("../controllers/product.controller");
const router = require("express").Router();

router.get("/",getAllProducts);
router.get("/:id",getProductById);

module.exports = router;