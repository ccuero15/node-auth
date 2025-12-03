import mongoose, { Schema, model } from "mongoose";

/* es la definicion del schema reglas de como deberia ser los recursos */

const userSchema = new Schema({
    name: {
        type: String,
        required: [ true, 'Name is required' ]
    },
    email: {
        type: String,
        required: [ true, 'email is required' ],
        unique: true
    },
    password: {
        type: String,
        required: [ true, 'password is required' ]
    },
    img: {
        type: String
    },
    roles: {
        types: [ String ],
        default: [ 'USER_ROLE' ],
        enum: [ 'USER_ROLE', 'ADMIN_ROLE' ]
    }
});

export const UserModel = model('User', userSchema)