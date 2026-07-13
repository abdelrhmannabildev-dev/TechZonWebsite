const  { getAllCategories ,addCategory,deleteCategory,updateCategory}=require("../controllers/category.controller");
const authMiddleware = require("../middleware/authenticate.middleware");
const isAdmin = require("../middleware/admin.middleware");
const router = require("express").Router(); 

router.get("/",getAllCategories);

// protected routes
router.use(authMiddleware);
router.use(isAdmin);
router.post("/",addCategory);
router.delete("/:id",deleteCategory);
router.put("/:id",updateCategory);

module.exports = router;