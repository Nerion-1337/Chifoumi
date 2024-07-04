const jwt = require("jsonwebtoken");
//
//
exports.token_valid = (req, res, next) => {
        try {
         if(!req.headers.authorization) return res.status(202).json({ error_token: "Aucun Token"});
            const token = req.headers.authorization;

            const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
            const userId = decodedToken.id;
            req.auth = {
                userId: userId
            };
            
        if(decodedToken.id === undefined) res.status(202).json({error_token: "Aucun id dans token"})        
   
         return next();
        } catch(error) {
            res.status(202).json({ error_token: error });
        }
     };