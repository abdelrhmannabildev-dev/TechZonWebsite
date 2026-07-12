const {makeOrder,getAllOrders ,changeOrderStatus}=require("../controllers/order.controller")
const {validateOrder}=require("../middleware/validateOrder.middleware")
const authMiddleware = require("../middleware/authMiddleware");
const isAdmin = require("../middleware/isAdmin");
const router = require("express").Router();

router.post("/",validateOrder,makeOrder);

// protected routes
router.use(authMiddleware);
router.use(isAdmin);

router.get("/",getAllOrders);

router.patch("/status",changeOrderStatus);

module.exports = router;