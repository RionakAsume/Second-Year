import {Router} from "express"
import { postUser} from "../handlers/User"; 
const routerUser= Router();


routerUser.post('/',postUser)






export default routerUser