import { AuthDatasource } from "@domain/datasources/auth.datasource.js";
import { RegisterUserDto } from "@domain/dtos/auth/register-user.dtos.js";
import { UserEntity } from "@domain/entities/user.entity.js";
import { CustomError } from "@domain/errors/custom.error.js";




export class AuthDatasourceImpl implements AuthDatasource {
   async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {

        const { email, password, name } = registerUserDto;
        try {

            // 1. verificar si el correo ya existe


            // 2 . hashear la contraseña


            // 3 mappear la respuesta a una entidad

            
            return new UserEntity(
                '1',
                email,
                name,
                password,
                ['ADMIN_ROLE'],
            );
            
        } catch (error) {
            if (error instanceof Error) {
                throw error;
            }
            throw CustomError.internatServer();

        }
        //throw new Error("Method not implemented.");
    }
    
}