import { createPool } from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

// console.log("db_host", process.env.DB_HOST);

const connection = createPool({
   host: process.env.DB_HOST || "localhost",
   user: process.env.DB_USER || "root",
   password: process.env.DB_PASSWORD || "123456",
   database: process.env.DB_NAME || "dart_shop",
   port: process.env.DB_PORT || 3307,
   waitForConnections: true,
   connectionLimit: 10,
   queueLimit: 10,
});

// Test DB
const type = [
   { id: "jd1", name: "Jordan 1" },
   { id: "jd2", name: "Jordan 2" },
   { id: "jd3", name: "Jordan 3" },
   { id: "am270", name: "Air Max 270" },
   { id: "am97", name: "Air Max 97" },
];

// connection.connect((err) => {
//    if (err) {
//       console.error("Error connecting to database:", err);
//       return;
//    }
//    console.log("Connected to database");

// const insertTypeQuery = `
//    INSERT INTO Type (TypeID, TypeName)
//    VALUE (?, ?)
// `;

// type.forEach((type) => {
//    let value = [type.id, type.name];

//    connection.query(insertTypeQuery, value, (err, result) => {
//       if (err) {
//          console.error("Error inserting data into Type table:", err);
//       } else {
//          console.log(
//             `Data for ${type.name} inserted into Type table successfully`
//          );
//       }
//    });
// });

// const insertProductQuery = `
// INSERT INTO Product (ProductID, Name, Description, Color, Price, TypeID, Image, Sizes )
// VALUE (?, ?, ?, ?, ?, ?, ?, ?)`;

// productData.forEach((product) => {
//    let value = [
//       product.id,
//       product.name,
//       product.desc,
//       product.color,
//       product.price,
//       product.type,
//       product.img,
//       `${product.size}`,
//    ];

//    connection.query(insertProductQuery, value, (err, result) => {
//       if (err) {
//          console.error("Error inserting data into Type table:", err);
//       } else {
//          console.log(
//             `Data for ${type.name} inserted into Type table successfully`
//          );
//       }
//    });
// });

// connection.end();
// });

export { connection };
