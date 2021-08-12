import {Sequelize} from 'sequelize';

//db,usuario,senha
const db = new Sequelize('lacreimpv','root','neopc121', {
    host:'lacrei-mpv.cjjqi7n90t3t.us-east-2.rds.amazonaws.com',
    dialect:'mysql',
    //logging:false
});

export default db;
