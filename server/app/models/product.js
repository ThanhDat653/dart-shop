'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Product.init({
    name: DataTypes.STRING,
    productID: DataTypes.STRING,
    description: DataTypes.STRING,
    colo: DataTypes.STRING,
    price: DataTypes.FLOAT,
    typeID: DataTypes.STRING,
    image: DataTypes.STRING,
    sizes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};