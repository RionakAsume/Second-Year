import {Router} from "express"
import {postRole} from "../handlers/Role"



const routerRole= Router();


routerRole.post('/',postRole)



export default routerRole