// models/student.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db-connect'); // Sequelize instance

const Student = sequelize.define('Student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Student;
