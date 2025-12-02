import { envs } from '@config/envs.js';
import {Server} from './presentation/server.js'
import { AppRoutes } from './presentation/route.js';

(async()=>{
    await main();
})()

async function main() {
    //TODO: await base de datos
    //todo inicio del server

    const server = new Server({
        port:envs.PORT,
        routes: AppRoutes.routes
    });
    await server.start();
    
}