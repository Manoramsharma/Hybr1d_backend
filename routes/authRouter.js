const router = require("express").Router();
const Controller = require("../controllers/auth");

router.post("/auth/register", Controller.register);

router.post("/auth/login", Controller.login);

router.post("/googlelogin", Controller.googleLogin);

router.post("/facebooklogin", Controller.facebooklogin);

router.post("/logout", Controller.logout);
router.post("/refresh_token", Controller.generateAccessToken);

module.exports = router;
