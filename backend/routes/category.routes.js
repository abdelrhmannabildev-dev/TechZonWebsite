const { getAllCategories, getProductByCategory }=require("../controllers/category.controller");
const router = require("express").Router(); 

router.get("/",getAllCategories);
router.get("/:id",getProductByCategory);

module.exports = router;