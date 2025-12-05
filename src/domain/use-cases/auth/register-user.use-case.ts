import { JwtAdapter } from "@config/jwt.js";
import { RegisterUserDto } from "@domain/dtos/auth/register-user.dtos.js";
import { CustomError } from "@domain/errors/custom.error.js";
import { AuthRepository } from "@domain/repositories/auth.repository.js";


interface UserToken {
    token: string;
    user: {
        id: string;
        name: string;
        email: string;
    }
}

type SignToken = (payload: Object, duration?: number) => Promise<string | null>
interface RegisterUserUseCase {
    execute(registerUserDto: RegisterUserDto): Promise<UserToken>
}

export class RegisterUser implements RegisterUserUseCase {


    constructor(
        private readonly authRepository: AuthRepository,
        private readonly singToken: SignToken = JwtAdapter.generateToken

    ) { }

    async execute(registerUserDto: RegisterUserDto): Promise<UserToken> {

        //crear usuario
        const user = await this.authRepository.register(registerUserDto)

        //token
        const token = await this.singToken({ id: user.id }, 60)

        if (!token) throw CustomError.internatServer('Error generating token')

        return {
            token: token,
            user
        }
    }


}