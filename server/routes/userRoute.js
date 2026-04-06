const protect = require("../middleware/authMiddleware");

router.get("/", protect, getAllUsers);