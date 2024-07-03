// SERVER
const { SQL } = require("../SQL") ;
// COMPENENT
const jwt = require("jsonwebtoken");
// DATA
const { Links_Server } = require("../links")
//
//
// REGISTER
//
//
//
 exports.user_player = async (req, res, next) => {
//
//
// VARIABLE
//
//
const select_user = `SELECT ${Links_Server[0].id}, 
                              ${Links_Server[0].pseudo},
                              ${Links_Server[0].score}
                  FROM ${Links_Server[0].table} 
                  WHERE ${Links_Server[0].pseudo} = ?`;
const value_select_user = [req.body[Links_Server[0].pseudo].trim()] 
//
//
const insert_user = `INSERT INTO ${Links_Server[0].table} 
                    (${Links_Server[0].pseudo}) 
                    VALUE (?)`    
const values_insert_user = [req.body[Links_Server[0].pseudo].trim()];
//
//
// VERIFIE UTILISATEUR EXISTANT
//
//
  SQL.query(select_user, [value_select_user], (err, data_select_user)=>{
    if (err) return res.status(500).json(err);
    if (data_select_user.length) {
//
//
// TOKEN
//
//
    const token = jwt.sign({ id: data_select_user[0].insertId }, process.env.TOKEN_SECRET, { expiresIn: '24h' });
//
// RETURN
//    
    return res.status(200).json({token: token});
}
//
//
// INSERT DATA
//
//
  SQL.query(insert_user, [values_insert_user], (err, data_insert_user) =>{
    if (err) return res.status(500).json(err);
//
//
// TOKEN
//
//
const token = jwt.sign({ id: data_insert_user.id }, process.env.TOKEN_SECRET, { expiresIn: '24h' });
//
// RETURN
//   
    return res.status(200).json({token: token});
   });
 });
};