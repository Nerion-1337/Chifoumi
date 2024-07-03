const router = require("express").Router();
const userController = require("./controllers/users");
const jwt = require("./middleware/token");
const joi_user = require("./middleware/users");
//
//
// ROUTES
//
//
// TOKEN
router.get('/token', jwt.token_valid)
//
// USER PLAYER
router.post('/users', joi_user.user_player, userController.user_player);
module.exports = router;