import { UserModel } from "@data/mongodb/models/user.model.js";
import { AuthDatasource } from "@domain/datasources/auth.datasource.js";
import { RegisterUserDto } from "@domain/dtos/auth/register-user.dtos.js";
import { UserEntity } from "@domain/entities/user.entity.js";
import { CustomError } from "@domain/errors/custom.error.js";




export class AuthDatasourceImpl implements AuthDatasource {
    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {

        const { email, password, name } = registerUserDto;

        try {

            // 1. verificar si el correo ya existe
            const exists = await UserModel.findOne({ email })
            if (exists) throw CustomError.badRequest('user already exists');


             // 2 . hashear la contraseña

            const user = await UserModel.create({
                name,
                email,
                password,
            });


           await user.save();


            // 3 mappear la respuesta a una entidad

            //todo falta un mapper
            return new UserEntity(
                user.id,
                email,
                name,
                password,
                user.roles,
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