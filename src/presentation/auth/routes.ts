import { Router } from "express";
import { AuthController } from "./controller.js";
import { AuthRepositoryImpl } from "@infrastructure/repositories/auth.repository.impl.js";
import { AuthDatasourceImpl } from "@infrastructure/datasources/auth.datasource.impl.js";
import { AuthMiddleware } from "@presentation/middleware/auth.middleware.js";

export class AuthRoutes {

    static get routes(): Router {
        const router = Router();

        const database = new AuthDatasourceImpl();

        const authRepository = new AuthRepositoryImpl(database);

        const controller = new AuthController(authRepository);

        // definir todas mis rutas

        router.post('/login', controller.loginUser)
        router.use('/register', controller.registerUser)
        router.use('/', AuthMiddleware.validateJWT ,controller.getUsers)


        return router;
    }
}