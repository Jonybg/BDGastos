import { Router } from "express";
import { getGasto, getGastoByNUM, createGasto, updateGasto, deleteGasto } from "../controllers/gastos"


const gastosRouter = Router()


gastosRouter.get("/", getGasto)
gastosRouter.get("/:num", getGastoByNUM)
gastosRouter.post("/", createGasto)
gastosRouter.put("/:num", updateGasto)
gastosRouter.patch("/:num", updateGasto)
gastosRouter.delete("/:num", deleteGasto)

export default gastosRouter;