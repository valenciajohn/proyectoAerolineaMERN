import { Router } from "express";
import path from "path";
import { verifyToken, verifySuperAdmin } from "../middlewares/jwtMiddlware.js";

const router = Router();

// Ruta para servir el dashboard (solo accesible para superadmin)
router.get('/dashboard-superadmin', verifyToken, verifySuperAdmin, (req, res) => {
    res.sendFile(path.resolve("public/dashboardSuperadmin.html"));
});

export default router;
