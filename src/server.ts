import express from "express";
import routerUser from "./routers/user";
import routerRole from "./routers/role";
import routerTipo_Dni from "./routers/tipo_dni";
import routerFacturas from "./routers/facturas";
import routerCliente from "./routers/clientes";



import authRouters from "./routers/auth.router";
import { db, db2 } from "./config/db"; // Importa db y db2
import cookieParser from "cookie-parser";
import cors from "cors";

async function conectDB() {
  try {
    // Conectar y sincronizar db
    await db.authenticate();
    await db.sync();
    console.log("La base de datos principal se conectó y sincronizó correctamente.");

    // Conectar y sincronizar db2 (MySQL)
    await db2.authenticate();
    await db2.sync();
    console.log("La base de datos MySQL se conectó y sincronizó correctamente.");
  } catch (error) {
    console.error("Error al conectar a las bases de datos:", error);
  }
}

conectDB(); // Llamada a la función de conexión y sincronización

const server = express();

server.use(express.json());
server.use(cookieParser());

const allowedOrigins = ["http://localhost:5173"];
server.use(
  cors({
    origin: function (origin, callback) {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

server.use("/api/", authRouters);
server.use("/api/user", routerUser);
server.use("/api/role", routerRole);
server.use("/api/tipo_dni", routerTipo_Dni);
server.use("/api/facturas", routerFacturas);
server.use("/api/clientes", routerCliente);


export default server;