'use strict'
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable('Types', {
         id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.STRING,
         },
         name: {
            type: Sequelize.STRING,
            allowNull: false,
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
      await queryInterface.dropTable('Types')
   },
}
