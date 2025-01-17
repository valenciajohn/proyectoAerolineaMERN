import { Router } from "express";
import { UserController } from "../controllers/userController.js";
import { verifySuperAdmin, verifyToken } from "../middlewares/jwtMiddlware.js";

const router = Router()

// api/v1/users

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/profile', verifyToken, UserController.profile) // Ruta protegida para admins

// Admin
router.get('/', verifyToken, verifySuperAdmin, UserController.findAll)
// Registrar un usuario por el superadmin
router.post('/registerSuperAdmin', verifyToken, verifySuperAdmin, UserController.registerUserBySuperAdmin);
// Buscar usuario por correo
router.get('/searchByEmail', verifyToken, verifySuperAdmin, UserController.searchByEmail); 
//actualizar usuario
router.put('/users', verifyToken, verifySuperAdmin, UserController.updateUser);


export default router;
