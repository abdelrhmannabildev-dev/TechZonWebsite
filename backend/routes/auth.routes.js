const {adminLogin,adminRegister,getCurrentAdmin}=require("../controllers/auth.controller");
const authMiddleware = require("../middleware/authenticate.middleware");
const router = require("express").Router();

router.post("/login",adminLogin);
router.get("/me",authMiddleware,getCurrentAdmin);
// router.put("/",adminRegister);

module.exports = router;