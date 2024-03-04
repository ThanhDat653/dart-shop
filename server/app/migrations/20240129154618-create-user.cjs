"use strict";
/**
 *@type {import('seqelize-cli').Migration}
 */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable("Users", {
         userID: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         userName: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         roleID: {
            type: Sequelize.STRING,
         },
         email: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         password: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         phoneNumber: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
         updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
      });
   },
   async down(queryInterface, Sequelize) {
      await queryInterface.dropTable("Users");
   },
};
