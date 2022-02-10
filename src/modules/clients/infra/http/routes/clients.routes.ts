import { Router } from "express";
import ClientController from "../controllers/ClientController";
const routes = Router();
routes.post("/", ClientController.create);

routes.get("/busca/:id", ClientController.acha);

routes.post("/atualiza/:id", ClientController.atualiza);

routes.get("/lista/", ClientController.retornaTodos);

routes.delete("/:id", ClientController.bani);

export default routes;
