module.exports = (sequelize, dataType) => {
const setting = sequelize.define("setting", {
    iD:{
        type: dataType.INTEGER,
        autoincrement: true,
        allowNull: false,
        primaryKey: true
    },
    theme: {
        type: dataType.STRING,
        allowNull: false


    }
});

return setting;
};

