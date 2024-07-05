const router = require("express").Router();
const userController = require("./controllers/users");
const gameController = require("./controllers/game");
const rankController = require("./controllers/ranking");
const jwt = require("./middleware/token");
const joi_user = require("./middleware/users");
const joi_game = require("./middleware/game");
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
router.post('/game/gameplay', jwt.token_valid, joi_game.option_user, gameController.gameplay);
//
// RANKING
router.get('/rank/top10', jwt.token_valid, rankController.ranking);
//
//
//
//
//
module.exports = router;