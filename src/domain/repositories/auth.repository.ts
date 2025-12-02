import { RegisterUserDto } from "@domain/dtos/auth/register-user.dtos.js";
import { UserEntity } from "@domain/entities/user.entity.js";

export abstract class AuthRepository {

    //TODO : Define methods for authentication data source
    // abstract login(lofingUserDto:LoginUserDto):Promise<UserEntity>;

    abstract register(registerUserDto:RegisterUserDto):Promise<UserEntity>;

}