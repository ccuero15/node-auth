import { NextFunction, Request, Response } from "express";





export class AuthMiddleware {


    static validateJWT = (req: Request, res: Response, next: NextFunction) => {


        const authorization = req.header('authorization');

        if (!authorization) return res.status(401).json({ error: 'No token provided' })
        if (!authorization.startsWith('Bearer ')) return res.status(401).json({ error: 'Invalid Bearer token' })

        const token = authorization.split(' ').at(1) || '';

        try {
            //todo
            //const payload = JwtAdapter??
             req.body = req.body || {}; // <-- evita Cannot set properties of undefined
            (req.body as any).token = token;

            //req.body.token = token

            console.log('paso por el middleware')
            next();
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Internal Server Error' })
        }




    }

}