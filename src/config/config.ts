import dotenv from "dotenv";

dotenv.config();



const config = {
  port: parseInt(process.env.PORT || "3000", 10),
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbUser: process.env.DB_USER,
};

export default config;