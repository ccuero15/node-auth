import { envs } from '@config/envs.js';
import {Server} from './presentation/server.js'
import { AppRoutes } from './presentation/route.js';
import { MongoDatabase } from '@data/mongodb/mongo-database.js';

(async()=>{
    await main();
})()

async function main() {
    //TODO: await base de datos
    await MongoDatabase.connect({
        dbName:envs.MONGO_DB_NAME,
        mongoUrl:envs.MONGO_URL
    });

    //todo inicio del server

    new Server({
        port:envs.PORT,
        routes: AppRoutes.routes
    }).start();
    //await server.start();
    


}