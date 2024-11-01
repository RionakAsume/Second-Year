import { Request,Response } from "express";
import User from "../models/User.models";

const postUser = async (req:Request,res:Response)=>{
   try {
    const user=await User.create(req.body)
    res.json({data:user})
   } catch (error) {
    console.log(error)
   }
}

// const getUsersByRoleId = async (req: Request, res: Response) => {
//     const { roleId } = req.params; 
  
//     try {
//       const users = await User.findAll({
//         where: { roleId }, 
//       });
  
//       if (users.length === 0) {
//         return res.status(404).json({ message: "No users found with this roleId" });
//       }
  
//       res.json({ data: users });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "Error retrieving users" });
//     }
//   };


//   const getUserById = async (req: Request, res: Response) => {
//     const { id } = req.params; // Extraer id de los parámetros
  
//     try {
//       const user = await User.findByPk(id); // Buscar por la clave primaria (id)
  
//       if (!user) {
//         return res.status(404).json({ message: "User not found" });
//       }
  
//       res.json({ data: user });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "Error retrieving user" });
//     }
//   };
  


export {
    postUser,
}