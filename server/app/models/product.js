'use strict'
import { Model } from 'sequelize'
export default (sequelize, DataTypes) => {
   class Product extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
      }
   }
   Product.init(
      {
         id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
         },
         name: { type: DataTypes.STRING, allowNull: false },
         description: DataTypes.STRING,
         color: DataTypes.STRING,
         price: { type: DataTypes.FLOAT, allowNull: false },
         typeID: {
            allowNull: false,
            type: DataTypes.STRING,
            references: {
               model: 'types',
               key: 'id',
            },
         },
         image: DataTypes.STRING,
         sizes: DataTypes.STRING,
      },
      {
         sequelize,
         modelName: 'Product',
      },
   )
   return Product
}
