import express, { Router } from 'express'

interface Options {
    port?: number,
    routes: Router
}


export class Server {
    public readonly app = express();
    private readonly port: number = 3000;
    private readonly routes: Router;

    constructor(options: Options) {

        const { port = 3100, routes } = options

        this.port = port
        this.routes = routes
    }

    async start() {

        //Middleware
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true })); //Para soportar x-www-form-urlencode

        //user las rutas definidas
        this.app.use(this.routes)

        //iniciar el server
        this.app.listen(this.port, () => {
            console.log(`app corriendo en el puerto ${this.port}`)
        })
    }

}

