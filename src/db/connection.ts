import {Sequelize} from 'sequelize';

//db,usuario,senha
const db = new Sequelize('lacrei','root','neopc121', {
    host:'localhost',
    dialect:'mysql',
    //logging:false
});

export default db;
