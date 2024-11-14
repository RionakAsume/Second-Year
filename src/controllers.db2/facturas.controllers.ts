
import { db2 } from "../config/db";

export const obtenerVentasPorMes = async (req, res) => {
  try {
    const { mes } = req.params; // Mes que se pasa por parámetro

    // Validamos que mes esté entre 1 y 12
    const mesNum = parseInt(mes);
    if (mesNum < 1 || mesNum > 12) {
      return res.status(400).json({ error: "Mes inválido. Debe estar entre 1 y 12." });
    }

    const ventas = await db2.query(
      `
      SELECT * FROM (
        SELECT 
          facturas.id_factura,
          facturas.fecha_venta,
          clientes.nombre,
          clientes.apellido,
          MONTH(facturas.fecha_venta) AS meses
        FROM 
          facturas
        INNER JOIN 
          clientes ON clientes.id_cliente = facturas.id_cliente
      ) AS auxiliar 
      WHERE auxiliar.meses = :mes;
      `,
      {
        replacements: { mes: mesNum }, // Inyectar el mes proporcionado como número
        type: db2.QueryTypes.SELECT
      }
    );

    return res.json(ventas);
  } catch (error) {
    console.error("Error obteniendo ventas por mes:", error);
    return res.status(500).json({ error: "Error al obtener las ventas." });
  }
};




