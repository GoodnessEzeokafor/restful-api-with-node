// const https = require('httos');
// const fs = require('fs');

module.exports = app =>{
    if(process.env.NODE_ENV !== "test"){
        
    app.db.sequelize.sync().done(()=>{
        app.listen(app.get("port"),()=>{
            console.log(`NTask API - Port ${app.get("port")}`);
        });
    });
    }
};

// module.exports = app =>{
//     app.db.sync().done(()=>{

//     app.listen(app.get("port"),()=>{
//         console.log(`NTask API - PORT ${app.get("port")}`);
//         });
//     });
// };

