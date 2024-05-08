const { DataTypes } = require('sequelize');
const sequelize = require('../config/db-connect');
const Book = require('./books')

const BookDetails = sequelize.define('Book-details', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genere: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  
  Book.hasOne(BookDetails, {
      foreignKey: 'title'
    });
     BookDetails.belongsTo(Book);

module.exports = BookDetails;
