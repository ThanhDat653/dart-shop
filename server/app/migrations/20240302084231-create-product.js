"use strict";
export async function up(queryInterface, Sequelize) {
   await queryInterface.createTable("Products", {
      id: {
         allowNull: false,
         autoIncrement: true,
         primaryKey: true,
         type: Sequelize.INTEGER,
      },
      name: {
         type: Sequelize.STRING,
      },
      productID: {
         type: Sequelize.STRING,
      },
      description: {
         type: Sequelize.STRING,
      },
      colo: {
         type: Sequelize.STRING,
      },
      price: {
         type: Sequelize.FLOAT,
      },
      typeID: {
         type: Sequelize.STRING,
      },
      image: {
         type: Sequelize.STRING,
      },
      sizes: {
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
}
export async function down(queryInterface, Sequelize) {
   await queryInterface.dropTable("Products");
}
