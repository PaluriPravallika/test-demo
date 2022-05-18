const express = require("express");
const controllers = require("../controllers");
const router = express.Router();

router.route("/").put(controllers.getAllsample);
router.route("/:id").put(controllers.updateTodo);
module.exports = router;