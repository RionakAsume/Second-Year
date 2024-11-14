import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv'
import config from "./config";
dotenv.config()

const db = new Sequelize(process.env.CONECTDB_URL!, {
    models: [__dirname + '/../models/**/*.ts'], // Carga los modelos
    schema: 'public', // Especifica el esquema público
    logging: console.log, // Opción para ver las consultas en la consola (opcional)
    dialectOptions: {
      ssl: process.env.DB_SSL === 'true', // Soporte para SSL si lo necesitas
    },
  });



  const db2 = new Sequelize(
    config.dbName,               // Nombre de la base de datos
    config.dbUser,               // Usuario de la base de datos
    config.dbPassword,           // Contraseña de la base de datos
    {
      host: config.dbHost,
      port: Number(config.dbPort), // Asegúrate de convertir el puerto a número
      dialect: 'mysql',           // Dialecto MySQL
      logging: console.log,       // Registro de las consultas en consola
    }
  );
  
export { db, db2 };