import { Router } from "express";
import { register, login, logout, profile,verify } from "../controllers/auth.controllers";
import { authRequierd } from "../middlewares/validateToken";
import { validateSchema } from "../middlewares/validator.middleware";
import { registerSchema,loginSchema } from "../schemas/auth.schema";

const router = Router();

router.post('/register',validateSchema(registerSchema), register);
router.post('/login', validateSchema(loginSchema), login);
router.post('/logout', logout);

router.get('/verify', verify);
router.get('/profile', authRequierd, profile);

export default router;
