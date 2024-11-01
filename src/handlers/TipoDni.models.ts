import { Request,Response } from "express";

import Tipo_dni from "../models/Tipodni.models";

const postTipo_Dni = async (req:Request,res:Response)=>{
   try {
    const tipo=await Tipo_dni.create(req.body)
    res.json({data:tipo})
   } catch (error) {
    console.log(error)
   }
}

export {
    postTipo_Dni
}