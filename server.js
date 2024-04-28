require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.APP_PORT;

const db = require("./app/models"); //เรียก index.js ให้เราเก็บลงใน db
db.sequelize.sync({force: true}).then(() => { // force คือ flase = autocreate ครั้งเดียว กับ true drop table ทิ้งทุกครั้งที่ run code
    console.log("database เชื่อมต่อแล้ว");//บอกสถานะ
}); // ซิงค์ข้อมูล ให้เขียนบอกว่า sync ได้หรือ error

app.get('/', function(req, res){
    res.send('Default Route');
});

app.listen(PORT, function(){
   
    console.log(`Server is running on port ${PORT}`);
});