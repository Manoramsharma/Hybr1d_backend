const express = require("express");
const router = express.Router();

const Controller = require("../controllers/user");
const auth = require("../middlewares/auth");
router.post("/follow/:id", auth, Controller.follow);
router.post("/unfollow/:id", auth, Controller.unfollow);
router.get("/user", Controller.getUser);
router.get("/buyer/list-of-sellers", Controller.getsellers);

module.exports = router;
