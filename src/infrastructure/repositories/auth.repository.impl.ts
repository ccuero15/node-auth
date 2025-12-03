import { AuthDatasource } from "@domain/datasources/auth.datasource.js";
import { RegisterUserDto } from "@domain/dtos/auth/register-user.dtos.js";
import { UserEntity } from "@domain/entities/user.entity.js";
import { AuthRepository } from "@domain/repositories/auth.repository.js";

export class AuthRepositoryImpl implements AuthRepository {

    constructor(
        private readonly authDatasource: AuthDatasource
    ) { }

    register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        return this.authDatasource.register(registerUserDto);
    }






}