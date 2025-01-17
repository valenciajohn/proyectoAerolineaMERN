import jwt from 'jsonwebtoken'
import { UserModel } from '../models/userModel.js'

export const verifyToken = (req, res, next) => {
    let token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: "Token no recibido" });
    }

    token = token.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.email = decoded.email;
        req.id_rol = decoded.id_rol; // Agregar id_rol al request
        next();
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: "Token inválido" });
    }
};

// Middleware para verificar si el usuario es Superadmin
export const verifySuperAdmin = async (req, res, next) => {
    const { email, id_rol } = req;

    try {
        if (id_rol !== 2) {  
            return res.status(403).json({ error: 'No tienes permisos para acceder a esta ruta' });
        }
        next();  // El usuario es Superadmin, continúa con la solicitud
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
};
