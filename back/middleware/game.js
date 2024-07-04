const joi = require("joi")
// DATA
const { Links_Server, Regex } = require("../links")//
//
// JOI
//
//
const validationSchemas = {

  option_user: joi.string()
      .valid("paper", "scissors", "rocks")
      .required(),
  };   
//
//
// USER PLAYER
//
//
 exports.option_user = (req, res, next) => {
       try {
        if(!req.body) return res.status(401).json("Aucune donnée");

        const { error: OptionError, value: option } = validationSchemas.option_user.validate(req.body.option_user);
        
        if (OptionError) { 
          return res.status(400).json({ error_option_game: error });
        }
        return next();
       } catch(error) {
           res.status(401).json({ error });
       }
    };