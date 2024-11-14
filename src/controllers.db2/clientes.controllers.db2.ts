import { db2 } from "../config/db";
import { QueryTypes } from "sequelize";


interface ClienteSucursal {
  cliente_id: number;
  "nombre y apellido": string;
  sucursal: string;
  sucursal_id: number;
}


export const getClientesPorSucursal = async (req, res) => {
  try {
    const { id_sucursal } = req.body;
    console.log("ID de Sucursal recibido en controlador:", id_sucursal);

    const clientes: ClienteSucursal[] = await db2.query(
      `
      SELECT 
        c.cliente_id, 
        CONCAT(c.nombre, " ", c.apellido) AS "nombre y apellido", 
        s.nombre AS sucursal, 
        c.sucursal_id 
      FROM 
        cliente c 
      JOIN 
        sucursal s ON c.sucursal_id = s.sucursal_id 
      WHERE 
        c.sucursal_id = :id_sucursal;
      `,
      {
        replacements: { id_sucursal },
        type: QueryTypes.SELECT,
      }
    );

    return res.json(clientes);
  } catch (error) {
    console.error("Error al obtener los clientes por sucursal:", error);
    return res.status(500).json({ message: "Error al obtener los clientes." });
  }
};


export const getTopClientes = async (req, res) => {
  try {
    const topClientes = await db2.query(
      `
      SELECT 
        CONCAT(c.nombre, " ", c.apellido) AS nombre_clientes, 
        R.cantidad 
      FROM 
        cliente c 
      INNER JOIN (
        SELECT 
          COUNT(f.factura_id) AS cantidad, 
          f.cliente_id 
        FROM 
          factura f 
        GROUP BY 
          f.cliente_id 
        ORDER BY 
          cantidad DESC 
        LIMIT 10
      ) AS R ON R.cliente_id = c.cliente_id;
      `,
      {
        type: QueryTypes.SELECT,
      }
    );

    return res.json(topClientes);
  } catch (error) {
    console.error("Error al obtener el ranking de clientes:", error);
    return res.status(500).json({ message: "Error al obtener el ranking de clientes." });
  }
};

export const getClientesMontoSuperior = async (req, res) => {
    try {
      const { montoMinimo } = req.body; // Recibe el monto mínimo del cuerpo de la solicitud
      console.log("Monto mínimo recibido:", montoMinimo);
  
      const resultados = await db2.query(
        `
        SELECT 
          CONCAT(c.nombre, " ", c.apellido) AS "nombre y apellido", 
          SUM(f.total) AS total_ventas_semestrales 
        FROM 
          cliente c 
        JOIN 
          factura f ON c.cliente_id = f.cliente_id 
        WHERE 
          f.fecha_venta BETWEEN DATE_SUB(NOW(), INTERVAL 3 MONTH) AND NOW() 
        GROUP BY 
          c.cliente_id, c.nombre 
        HAVING 
          total_ventas_semestrales > :montoMinimo
        ORDER BY 
          total_ventas_semestrales DESC;
        `,
        {
          replacements: { montoMinimo }, // Reemplaza el parámetro en la consulta
          type: QueryTypes.SELECT,
        }
      );
  
      return res.status(200).json(resultados);
    } catch (error) {
      console.error("Error al obtener los clientes con monto superior:", error);
      return res.status(500).json({ message: 'Error al obtener los datos' });
    }
  };
