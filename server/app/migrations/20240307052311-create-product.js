'use strict'
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable('Products', {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         name: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         description: {
            type: Sequelize.STRING,
         },
         color: {
            type: Sequelize.STRING,
         },
         price: {
            allowNull: false,
            type: Sequelize.FLOAT,
         },
         typeID: {
            type: Sequelize.STRING,
            references: {
               model: 'types',
               key: 'id',
            },
         },
         image: {
            type: Sequelize.STRING,
         },
         sizes: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         createdAt: {
            allowNull: false,
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
         },
         updatedAt: {
            allowNull: false,
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
         },
      })
   },
   async down(queryInterface, Sequelize) {
      await queryInterface.dropTable('Products')
   },
}
