import { LoginUserDto } from "@domain/dtos/auth/login-user.dto.js";
import { RegisterUserDto } from "@domain/dtos/auth/register-user.dtos.js";
import { UserEntity } from "@domain/entities/user.entity.js";

export abstract class AuthDatasource {

    //TODO : Define methods for authentication data source
    
    abstract login(loginUserDto:LoginUserDto):Promise<UserEntity>;

    abstract register(registerUserDto:RegisterUserDto):Promise<UserEntity>;

}