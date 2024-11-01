import { Request,Response } from "express";

import Role from "../models/Role.models";

const postRole = async (req:Request,res:Response)=>{
   try {
    const role=await Role.create(req.body)
    res.json({data:role})
   } catch (error) {
    console.log(error)
   }
}

export {
    postRole
}