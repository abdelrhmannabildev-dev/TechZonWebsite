const authMiddleware = require("../middleware/authenticate.middleware");
const isAdmin = require("../middleware/admin.middleware");
const router = require("express").Router();
const {getDashboardData}=require("../controllers/dashboard.controller")


router.use(authMiddleware);
router.use(isAdmin);

router.get("/",getDashboardData);

module.exports = router;