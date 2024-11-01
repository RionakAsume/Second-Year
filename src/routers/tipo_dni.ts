import {Router} from "express"
import {postTipo_Dni} from "../handlers/TipoDni.models"



const routerTipo_Dni= Router();


routerTipo_Dni.post('/',postTipo_Dni)



export default routerTipo_Dni