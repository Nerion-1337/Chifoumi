const joi = require("joi")
// DATA
const { Links_Server, Regex } = require("../links")//
//
// JOI
//
//
const validationSchemas = {

  [Links_Server[0].pseudo]: joi.string()
      .min(4)
      .max(30)
      .pattern(Regex[0].value)
      .required(),
  };   
//
//
// USER PLAYER
//
//
 exports.enter_user = (req, res, next) => {
       try {
        if(!req.body) return res.status(401).json("Aucune donnée");

        const { error: identifiantError, value: identifiant } = validationSchemas[Links_Server[0].pseudo].validate(req.body[Links_Server[0].pseudo]);
        
        if (identifiantError) {
            let message;
            if(identifiantError.details[0].type === "string.min") message = "Pseudo trop court, 3 caractères minimum."
            if(identifiantError.details[0].type === "string.max") message = "Pas de caractères spéciaux."
            if(identifiantError.details[0].type === "string.pattern.base") message = "Pas de caractères spéciaux."
            if(identifiantError.details[0].type === "any.required" || "string.empty") message = "Entrer un pseudo entre 4 et 30 caractères."
            
          return res.status(400).json({ error_identifiant: message });
        }

        return next();
       } catch(error) {
           res.status(401).json({ error });
       }
    };