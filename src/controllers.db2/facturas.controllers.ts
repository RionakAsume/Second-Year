
import { db2 } from "../config/db";
import { QueryTypes } from "sequelize";

interface Factura {
  factura_id: number;
  monto_factura: number;
  fechas: Date;
  nombre_cliente: string;
  tipo_pago: string;
}

export const obtenerVentasPorMes = async (req, res) => {
  try {
    const { mes } = req.body;

    const mesNum = parseInt(mes, 10);
    if (isNaN(mesNum) || mesNum < 1 || mesNum > 12) {
      return res.status(400).json({ error: "Mes inválido. Debe estar entre 1 y 12." });
    }

    const ventas: Factura[] = await db2.query(
      `
      SELECT 
        f.factura_id, 
        f.total AS monto_factura,
        f.fecha_venta AS fechas, 
        CONCAT(c.nombre, " ", c.apellido) AS nombre_cliente, 
        f.tipo_pago 
      FROM 
        factura f 
      JOIN 
        cliente c ON f.cliente_id = c.cliente_id 
      WHERE 
        MONTH(f.fecha_venta) = :mes;
      `,
      {
        replacements: { mes: mesNum },
        type: QueryTypes.SELECT,
      }
    );

    return res.json(ventas);
  } catch (error) {
    console.error("Error obteniendo ventas por mes:", error);
    return res.status(500).json({ error: "Error al obtener las ventas." });
  }
};
