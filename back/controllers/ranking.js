// SERVER
const { SQL } = require("../SQL") ;
// DATA
const { Links_Server } = require("../links")
//
//
// RANKING TOP 10
//
//
exports.ranking = async (req, res, next) => {
//
//
// VARIABLE
//
//
const select_top10 = `SELECT 
                            ${Links_Server[0].pseudo},
                            ${Links_Server[0].score}
                     FROM ${Links_Server[0].table} 
                     ORDER BY ${Links_Server[0].score} DESC
                     LIMIT 10`;
//
//
// REQUETE
//
//
SQL.query(select_top10, (err, data_top10)=>{
    if (err) return res.status(500).json(err);
    return res.status(200).json({top10: data_top10 });
   });    
}
