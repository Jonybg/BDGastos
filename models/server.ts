import express, { Express } from "express";
import gastosRouter from "../routes/routes";
import { conectarDB } from "../database/config";


export class Server {

    app: Express


    constructor() {
        this.app = express();
        this.conexionaDB();
        this.middlewares();
        this.routes();
    }


    async conexionaDB(): Promise<void> {
        await conectarDB()
    }


    middlewares(): void {
        this.app.use(express.json())
    }


    routes(): void {
        this.app.use("/gastos", gastosRouter)
    }

    listen(): void {
        this.app.listen(8080, () => {
            console.log("servicio inicializado")
        })
    }

}