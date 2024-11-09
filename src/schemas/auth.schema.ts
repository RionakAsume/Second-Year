import { z } from 'zod'

export const registerSchema = z.object({
    full_name: z.string({ required_error: 'El nombre completo es requerido' }),
    surname: z.string({ required_error: 'El nombre completo es requerido' }),
    password: z.string({ required_error: 'La contraseña es requerida' }).min(6, 'la contraseña debe ser mayor a 5 caracteres'),
    address: z.string({ required_error: 'La direccion es requerida' }),
    phone: z.string({ required_error: 'El telefono es requerido' }),
    dni: z.number({ required_error: 'El DNI es requerido' }),
    email: z.string({ required_error: 'email es requerido' }).email('formato de email no valido'),
    tipo_dni: z.number({ required_error: 'El tipo dni es requerido' }),
    roleId: z.number({ required_error: 'El rol es requerido' })
})
 
export const loginSchema = z.object({
    email: z.string({ required_error: 'Email es requerido' }).email('Email no valido'),
    password: z.string({ required_error: 'La contraseña es requerida' }).min(6, 'La contraseña es incorrecta'),
})