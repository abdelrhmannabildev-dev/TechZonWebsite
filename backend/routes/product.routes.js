const { getAllProducts, getProductById , addProduct , editProduct , deleteProduct }= require("../controllers/product.controller");
const isAdmin = require("../middleware/admin.middleware");
const authMiddleware = require("../middleware/authenticate.middleware");

const router = require("express").Router();

router.get("/",getAllProducts);
router.get("/:id",getProductById);

// admins
router.use(authMiddleware);
router.use(isAdmin);

router.post("/",addProduct);
router.patch("/:id",editProduct);
router.delete("/:id",deleteProduct);

module.exports = router;