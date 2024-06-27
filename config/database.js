const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ToDo', 'root', 'Aaditya@2004', {
  host: 'localhost',
  dialect: 'mysql',
  logging: console.log,
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
