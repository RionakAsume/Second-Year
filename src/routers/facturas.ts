import { Router } from "express";
import { obtenerVentasPorMes } from "../controllers.db2/facturas.controllers";

const routerFacturas = Router();

routerFacturas.post('/', obtenerVentasPorMes);

export default routerFacturas;
