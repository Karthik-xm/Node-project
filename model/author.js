const { DataTypes } = require('sequelize');
const sequelize = require('../config/db-connect');
const Book = require('./books')

const Author = sequelize.define('Author', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    place: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  
  Book.hasMany(Author, {
      foreignKey: 'id'
    });
    Author.belongsTo(Book);

module.exports = Author;
