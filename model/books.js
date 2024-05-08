const { DataTypes } = require('sequelize');
const sequelize = require('../config/db-connect');
const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Book;
