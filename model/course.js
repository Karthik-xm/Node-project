// models/course.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db-connect'); // Sequelize instance

const Course = sequelize.define('Course', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Course;
