import { MongoClient } from "mongodb";
const obtenerConeccion = async () => {
  try {
    const mongodbURL = "mongodb://localhost:27017/node_js_test";
    const cliente = await MongoClient.connect(mongodbURL);
    return cliente.db();
  } catch (error) {
    console.error(error.message);
  }
};

// mongodb://localhost:27017/
export { obtenerConeccion };
