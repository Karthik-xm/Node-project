
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db-connect');
const Student = require('./student');
const Course = require('./course');

const Enrollment = sequelize.define('Enrollment', {
});

Student.belongsToMany(Course, { through: Enrollment });
Course.belongsToMany(Student, { through: Enrollment });

module.exports = Enrollment;
