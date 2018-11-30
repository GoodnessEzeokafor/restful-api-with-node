const passport = require('passport');

const passportJWT = require("passport-jwt");
const Strategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
// const passport_jwt = require("passport-jwt");

// import Strategy, {ExtractJwt} from  "passport_jwt";



module.exports = app =>{
    const Users = app.db.models.Users;
    const cfg = app.libs.config;
    const params = {
        secretOrKey:cfg.jwtSecret,
        jwtFromRequest:ExtractJWT.fromAuthHeaderWithScheme("jwt")
    };
    const strategy = new Strategy(params,(payload,done)=>{
        Users.findById(payload.id)
             .then(user=> {
                 if(user){
                     return done(null,{
                         id:user.id,
                         email:user.email
                     });
                 }
                 return done(null,false);
             })
             .catch(error => done(error,null));
    });
    passport.use(strategy);
    return{
        initialize:() => {
            return passport.initialize();
        },
        authenticate:() =>{
            return passport.authenticate("jwt", cfg.jwtSession);
        }
    };
};