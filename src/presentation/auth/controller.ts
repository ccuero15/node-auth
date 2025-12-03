import { RegisterUserDto } from "@domain/dtos/auth/register-user.dtos.js"
import { AuthRepository } from "@domain/repositories/auth.repository.js"
import { Request, Response } from "express"

export class AuthController {

    //DI

    constructor(
        private readonly authRepository: AuthRepository
    ) {}

    registerUser = async (req: Request, res: Response) => {
        const [ error, registerUserDto ] = RegisterUserDto.create(req.body)

        if (error) return res.status(400).json({ error })
         
        this.authRepository.register(registerUserDto!).then( user => {
            res.json(user)
        }).catch( err =>  res.status(500).json({ error}))

        //res.json(registerUserDto)
    }

    loginUser = async (req: Request, res: Response) => {
        res.json('registerUser Controller')
    }

    
}