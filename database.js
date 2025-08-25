const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "753159852",
  database: "test_usuario_js",
});

connection.connect((error) => {
  if (error) {
    console.error("Error al conectar: ", error.message);
    return;
  }
  console.log("Coneccion exitosa...");
});

module.exports = connection;
