import mongoose from "mongoose";

export const conectarDB = async (): Promise<void> => {
    try {

        await mongoose.connect("mongodb+srv://gastos:gastos123@gastos.bwqqe3g.mongodb.net/")
        console.log("base de datos online")

    } catch (error) {
        console.log(error)
        throw new Error("Error a la hora de inicializar la base de datos")
    }
}