import { Schema, model, Model } from "mongoose";

export interface ISgasto {
    nombreUsuario: string,
    numeroGasto: number,
    valor: number,
    estado: boolean,

}

const GastoSchema = new Schema<ISgasto>({
    nombreUsuario: {
        type: String,
        required: true,
    },
    numeroGasto: {
        type: Number,
        required: true,
        unique: true
    },
    valor: {
        type: Number,
        required: true
    },
    estado: {
        type: Boolean,
        required: true,
        default: true
    }

})


const Gasto: Model<ISgasto> = model<ISgasto>("Gasto", GastoSchema)

export default Gasto 