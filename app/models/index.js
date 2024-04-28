const config = require('../config/db');
const dataType = require('sequelize');

//for connect database
const sequelize = new dataType(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect
    }
);

const db = {};

db.dataType = dataType;
db.sequelize = sequelize; //มาจาก packet ที่ require มาให้ไปกับ db

//(dataType, sequelize)
db.employee = require("./employee.model")(sequelize, dataType);
db.setting = require("./setting.model")(sequelize, dataType);


//one to one ความสัมพัน hasOne ตามด้วย belongsTo
db.employee.hasOne(db.setting, {

onDelete: 'CASCADE'
});

db.setting.belongsTo(db.employee);
module.exports = db;