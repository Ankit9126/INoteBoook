const jwt = require("jsonwebtoken");
const JWT_SECRET = "hell0h0w@rey0u";
const fetchuser = (req, res, next) => {
  //get the user from jwt token and get id to req object
   const authtoken= req.header('auth-token');
   if(!authtoken){
    res.status(401).send({error:"please authenticate using a valid token "});
   }
   try {
    const data=jwt.verify(authtoken,JWT_SECRET);
   req.user=data.user;
  next();
   } catch (error) {
    console.log("error in fetchuser.js in middleware: " + error.message);
    res.status(401).send({error:"please authenticate using a valid token "});
   }
   
};

module.exports = fetchuser;
