const {makeOrder,getAllOrders ,changeOrderStatus ,getOrdersDetailsById}=require("../controllers/order.controller")
const {validateOrder}=require("../middleware/validateOrder.middleware")
const authMiddleware = require("../middleware/authenticate.middleware");
const isAdmin = require("../middleware/admin.middleware");
const router = require("express").Router();

router.post("/",validateOrder,makeOrder);
// protected routes
router.use(authMiddleware);
router.use(isAdmin);

router.get("/",getAllOrders);
router.get("/:orderId",getOrdersDetailsById);
router.patch("/status",changeOrderStatus);

module.exports = router;