const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Task = require('./task');
const User = require('./user');

const db = {
    User, Task
};


User.hasMany(Task, { foreignKey: 'id' });
Task.belongsTo(User, { foreignKey: 'userID' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
