const express = require("express");
const cors = require("cors");
const conection = require("./database");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.get("/usuarios", (req, res) => {
  conection.query("SELECT * FROM usuario", (err, result) => {
    if (err) {
      res.status(500).send("Error al obtener la data");
    }
    res.json(result);
  });
});

app.listen(port, () => {
  console.log(`Servidor Escuchando en puerto ${port}`);
});
