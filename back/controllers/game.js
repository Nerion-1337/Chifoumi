// SERVER
const { SQL } = require("../SQL") ;
// DATA
const { Links_Server } = require("../links")
//
//
// LOGIQUE GAME
//
//
exports.gameplay = async (req, res, next) => {
//
//
// VARIABLE DU JEU
//
//
const choose_user = req.body.option_user;
const element = ["paper", "scissors", "rocks"];
const chooseIA = element[Math.floor(Math.random() * element.length)]
let result;
let score;
//
// LOGIQUE DU JEU
//
if(chooseIA === choose_user){
    result = "draw"
} else if(
    choose_user === "paper" && chooseIA === "rocks" ||
    choose_user === "scissors" && chooseIA === "paper" ||
    choose_user === "rocks" && chooseIA === "scissors"
){
    result = "win"
} else{
    result = "lose"
}
//
//
if(result === "draw"){
    score = 0
} else if(result === "win"){
    score = 1
} else{
    score = -1
}
//
//
// VARIABLE SQL
//
//
const update_result = `UPDATE ${Links_Server[0].table} 
                       SET ${Links_Server[0].score} = ${Links_Server[0].score} + ? 
                       WHERE ${Links_Server[0].id} = ?`  
//
//
// UPDATE SCORE
//
//
SQL.query(update_result, [score, req.auth.userId], (err, data_update_user) =>{
    if (err) return res.status(500).json({error_option_game: err});
    
//
// RETURN
//   
    return res.status(200).json({score: score, result: result, option_ia: chooseIA });
});  
    };