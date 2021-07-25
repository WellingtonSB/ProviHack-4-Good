import {Sequelize} from 'sequelize';

//db,usuario,senha
const db = new Sequelize('lacrei','root','neopc121', {
    //host:'hack4good-lacrei.cjjqi7n90t3t.us-east-2.rds.amazonaws.com',
    host:'localhost',
    dialect:'mysql',
    //logging:false
});

export default db;
