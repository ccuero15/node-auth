import { RegisterUserDto } from "@domain/dtos/auth/register-user.dtos.js"
import { Request, Response } from "express"

export class AuthController {
    constructor() {

    }

    registerUser = async (req: Request, res: Response) => {
        const [ error, registerUserDto ] = RegisterUserDto.create(req.body)

        if (error) return res.status(400).json({ error })

        res.json(registerUserDto)
    }

    loginUser = async (req: Request, res: Response) => {
        res.json('registerUser Controller')
    }

    
}