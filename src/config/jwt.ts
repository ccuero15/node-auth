import jwt from 'jsonwebtoken'




export class JwtAdapter {
    static async generateToken(payload: Object, duration: number = 120): Promise<string | null> {

        return new Promise((resolve) => {

            //todo: generacion de seed
            jwt.sign(payload, 'SEED', { expiresIn: duration }, (error, token) => {
                if (error) return resolve(null);
                resolve(token!)
            })
        })

    }
}