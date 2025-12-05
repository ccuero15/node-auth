import { UserEntity } from "@domain/entities/user.entity.js";
import { CustomError } from "@domain/errors/custom.error.js";

export class UserMapper {


    static userEntityFromObject(object: { [ key: string ]: any }) {

        const { id, _id, name, email, password, roles } = object

        if (!_id || !id) {

            throw CustomError.badRequest('missing id')
        }

        if (!name)throw CustomError.badRequest('missing id')
        if (!email)throw CustomError.badRequest('missing email')
        if (!password)throw CustomError.badRequest('missing password')
        if (!roles)throw CustomError.badRequest('missing roles')
       

            return new UserEntity(
                _id || id,
                email,
                name,
                password,
                roles,
            );
    }




}