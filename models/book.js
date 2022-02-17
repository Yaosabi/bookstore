'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.belongsToMany(models.Author, {
        through: 'author_courses',
        as: 'authors',
        foreignKey: 'book_id',
        otherKey: 'author_id',
        timestamps: false
      })
    }
  };
  Book.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    publisher: DataTypes.STRING,
    pages: DataTypes.INTEGER,
    image: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Book',
    timestamps:false,
    tableName: 'books'
  });
  return Book;
};