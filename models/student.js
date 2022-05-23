const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define('student', {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        phone_num: Sequelize.STRING,
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    })
    
    return Student
}