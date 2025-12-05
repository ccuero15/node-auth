import Validators from "@config/validators.js"

export class LoginUserDto {
    constructor(
        public email: string,
        public password: string,
    ) { }

    static create(object: { [ key: string ]: any }): [ string?, LoginUserDto?] {
        const { email, password } = object

        if (!email) return [ 'Email is required', undefined ]
        if (!Validators.email.test(email)) return [ 'Email is not valid' ]
        if (!password) return [ 'Password is required', undefined ]
        if (password.length < 6) return [ 'password to short' ]
        /*  */
        return [
            undefined,
            new LoginUserDto(
                email,
                password
            )
        ]
    }

}