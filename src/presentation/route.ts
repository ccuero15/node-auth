import { Router } from "express";
import { AuthRoutes } from "./auth/routes.js";

export class AppRoutes {

    static get routes(): Router {
        const router = Router();
        // definir todas mis rutas
        
        router.use('/api/auth', AuthRoutes.routes)


        return router;
    }
}