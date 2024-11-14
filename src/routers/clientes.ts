import { Router } from "express";
import { getClientesPorSucursal, getTopClientes, getClientesMontoSuperior } from "../controllers.db2/clientes.controllers.db2";

const routerCliente = Router();

routerCliente.post('/sucursal', getClientesPorSucursal);
routerCliente.post('/monto', getClientesMontoSuperior);
routerCliente.get('/', getTopClientes);

export default routerCliente;
