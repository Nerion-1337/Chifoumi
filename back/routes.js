const router = require("express").Router();
const userController = require("./controllers/users");
const jwt = require("./middleware/token");
const joi_user = require("./middleware/users");
//
//
// ROUTES
//
//
//
// USER PLAYER
router.get('/users/open', jwt.token_valid, userController.user_open);
router.post('/users/enter', joi_user.enter_user, userController.enter_user);
//
// GAME
//router.post('/game', joi_user.user_player, userController.user_player);
//
//
//
//
//
module.exports = router;