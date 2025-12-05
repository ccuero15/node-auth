import { JwtAdapter } from "@config/jwt.js";
import { UserModel } from "@data/mongodb/models/user.model.js";
import { NextFunction, Request, Response } from "express";





export class AuthMiddleware {


    static validateJWT = async (req: Request, res: Response, next: NextFunction) => {


        const authorization = req.header('authorization');

        if (!authorization) return res.status(401).json({ error: 'No token provided' })
        if (!authorization.startsWith('Bearer ')) return res.status(401).json({ error: 'Invalid Bearer token' })

        const token = authorization.split(' ').at(1) || '';

        try {
            //todo
            const payload = await JwtAdapter.validateToken<{ id: string }>(token);
            if (!payload) return res.status(401).json({ error: 'Invalid token provided' })

            const user = await UserModel.findById(payload.id)

            if (!user) return res.status(401).json({ error: 'invalid token - user notfound' })


            req.body = req.body || {}; // <-- evita Cannot set properties of undefined
            (req.body as any).user = user;

            //req.body.token = token

            console.log('paso por el middleware')
            next();
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Internal Server Error' })
        }




    }

}