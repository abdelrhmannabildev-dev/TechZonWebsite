const { getAllProducts, getProductById,getProductByIds , addProduct , editProduct , deleteProduct }= require("../controllers/product.controller");
const isAdmin = require("../middleware/admin.middleware");
const authMiddleware = require("../middleware/authenticate.middleware");

const router = require("express").Router();

router.get("/",getAllProducts);
router.get("/:id",getProductById);
router.post("/cart",getProductByIds);
// admins
router.use(authMiddleware);
router.use(isAdmin);

router.post("/",addProduct);
router.patch("/:id",editProduct);
router.delete("/:id",deleteProduct);

module.exports = router;