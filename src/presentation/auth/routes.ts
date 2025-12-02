import { Router } from "express";
import { AuthController } from "./controller.js";

export class AuthRoutes {

    static get routes(): Router {
        const router = Router();
        const controller = new AuthController();

        // definir todas mis rutas

        router.post('/login', controller.loginUser)
        router.use('/register', controller.registerUser)
        //router.use('/api/auth', AuthRoutes.routes)


        return router;
    }
}