const Sequelize = require('sequelize')


const sequelize = new Sequelize('demo', 'root', 'Zrh7890.', {
    host: 'localhost',
    port:'3306',
    dialect: 'mysql',
    pool:{
        max:5,
        min:0,
        idle:10000,
    },
    logging: console.log
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;