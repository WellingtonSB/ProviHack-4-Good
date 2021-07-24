"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//db,usuario,senha
const db = new sequelize_1.Sequelize('lacrei', 'root', 'neopc121', {
    host: 'localhost',
    dialect: 'mysql',
    //logging:false
});
exports.default = db;
//# sourceMappingURL=connection.js.map