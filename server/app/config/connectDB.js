import { Sequelize } from "sequelize";

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("dart_shop", "root", "123456", {
   host: "localhost",
   dialect: "mysql",
   port: "3307",
});

const connection = async () => {
   try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
   } catch (error) {
      console.error("Unable to connect to the database:", error);
   }
};

export default connection;
