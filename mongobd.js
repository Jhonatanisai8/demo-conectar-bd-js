import { obtenerConeccion } from "./coneccionMongo.js";
const obtenerPeliculas = async () => {
  try {
    const database = await obtenerConeccion();
    const peliculas = await database.collection("peliculas").find().toArray();
    console.table(peliculas);
    console.log("Peliculas Obtenidas..");
  } catch (error) {
    console.error(error.message);
  }
};
obtenerPeliculas();
