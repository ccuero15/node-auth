import { JwtAdapter } from "@config/jwt.js";
import { LoginUserDto } from "@domain/dtos/auth/login-user.dto.js";
import { CustomError } from "@domain/errors/custom.error.js";
import { AuthRepository } from "@domain/repositories/auth.repository.js";

interface UserToken {
    token: string;
    id: string

}

type SignToken = (payload: Object, duration?: number) => Promise<string | null>

interface LoginUseCase {
    execute(loginUserDto: LoginUserDto): Promise<UserToken>

}

export class LoginUser implements LoginUseCase {
    constructor(
        private readonly authRepository: AuthRepository,
        private readonly singToken: SignToken = JwtAdapter.generateToken,
    ) { }

    async execute(loginUserDto: LoginUserDto): Promise<UserToken> {
        const user = await this.authRepository.login(loginUserDto)

        const token = await this.singToken({ id: user.id }, 60)

        if (!token) throw CustomError.internatServer('Error generating token')

        return {
            token,
            id:user.id
        }
    }





}