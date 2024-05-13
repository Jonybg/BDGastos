import { Response, Request } from "express"
import Gasto, { ISgasto } from "../models/gastos"


export const getGasto = async ({ }, res: Response) => {

    const condicion = { estado: true }

    const gastos = await Gasto.find(condicion)


    res.json({
        gastos
    })

    console.log("Gastos enviados")

}


export const getGastoByNUM = async (req: Request, res: Response) => {
    const { numeroGasto } = req.params

    const gastos: ISgasto | null = await Gasto.findOne({ numeroGasto: numeroGasto })

    res.json({
        gastos
    })

}

export const createGasto = async (req: Request, res: Response) => {

    const gastoData: ISgasto = req.body

    const gasto = new Gasto(gastoData)

    await gasto.save()

    res.json({
        msg: "Gasto guardado correctamente",
        gasto
    })

}


export const updateGasto = async (req: Request, res: Response) => {

    const { numeroGasto } = req.params
    const { ...data } = req.body

    const gasto = await Gasto.findByIdAndUpdate({ numeroGasto: numeroGasto }, data)

    res.json({
        gasto
    })

}

export const deleteGasto = async (req: Request, res: Response) => {

    const { numeroGasto } = req.params

    const gasto = await Gasto.findByIdAndDelete({ numeroGasto: numeroGasto })

    if (!gasto) {
        res.json({
            msg: "estudiante no encontrado"
        })
    }

    res.json({
        gasto
    })
}