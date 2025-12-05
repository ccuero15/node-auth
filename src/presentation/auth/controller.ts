import { RegisterUserDto } from "@domain/dtos/auth/register-user.dtos.js"
import { CustomError } from "@domain/errors/custom.error.js"
import { AuthRepository } from "@domain/repositories/auth.repository.js"
import { Request, Response } from "express"

export class AuthController {

    //DI

    constructor(
        private readonly authRepository: AuthRepository
    ) { }

    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) res.status(error.statusCode).json({ error: error.message })
        console.log(error)
        return res.status(500).json({error:'Internal Server Error'})
    }

    registerUser = async (req: Request, res: Response) => {
        const [ error, registerUserDto ] = RegisterUserDto.create(req.body)

        if (error) return res.status(400).json({ error })

        this.authRepository.register(registerUserDto!).then(user => {
            res.json(user)
        }).catch(err => this.handleError(err, res))

        //res.json(registerUserDto)
    }

    loginUser = async (req: Request, res: Response) => {
        res.json('registerUser Controller')
    }


}