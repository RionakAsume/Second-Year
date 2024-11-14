import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv'
import config from "./config";
dotenv.config()

const db = new Sequelize(process.env.CONECTDB_URL!, {
    models: [__dirname + '/../models/**/*.ts'], 
    schema: 'public', 
    logging: console.log, 
    dialectOptions: {
      ssl: process.env.DB_SSL === 'true', 
    },
  });



  const db2 = new Sequelize(
    config.dbName,               
    config.dbUser,               
    config.dbPassword,           
    {
      host: config.dbHost,
      port: Number(config.dbPort), 
      dialect: 'mysql',           
      logging: console.log,       
    }
  );
  
export { db, db2 };