const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Task = sequelize.define('Task', {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    userID:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'user',
            key: 'id'
        }
    },
    task: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName: 'task',
    timestamps: false
});

module.exports = Task;