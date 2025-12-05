import { BcryptAdapter } from "@config/bcrypt.js";
import { UserModel } from "@data/mongodb/models/user.model.js";
import { AuthDatasource } from "@domain/datasources/auth.datasource.js";
import { RegisterUserDto } from "@domain/dtos/auth/register-user.dtos.js";
import { UserEntity } from "@domain/entities/user.entity.js";
import { CustomError } from "@domain/errors/custom.error.js";
import { UserMapper } from "@infrastructure/mappers/user.mapper.js";


type HashFunction = (password: string) => string;
type CompareFunction = (password: string, hashed: string) => boolean;

export class AuthDatasourceImpl implements AuthDatasource {

    constructor(
        private readonly hashPassword:HashFunction = BcryptAdapter.hash,   
        private readonly comparePassword:CompareFunction  = BcryptAdapter.compare      
    ){}




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
                password: this.hashPassword(password),
            });


            await user.save();


            // 3 mappear la respuesta a una entidad

            //todo mapper de objeto a entidad
            return UserMapper.userEntityFromObject(user);

        } catch (error) {
            if (error instanceof Error) {
                throw error;
            }
            throw CustomError.internatServer();

        }
        //throw new Error("Method not implemented.");
    }

}