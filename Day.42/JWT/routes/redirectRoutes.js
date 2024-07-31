const router = require("express").Router();
const redirectController = require("../controllers/redirect");

router.get("/:id", redirectController.redirectRoute);

module.exports = router;
