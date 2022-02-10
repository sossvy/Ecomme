import { Router } from "express";
import RemoveCategoryService from "../../../services/RemoveCategoryService";
import CategoryController from "../controllers/CategoryController";

const routes = Router();

routes.post("/", CategoryController.create);

routes.get("/lista/", CategoryController.listar);

routes.delete("/:id", CategoryController.remover);

routes.put("/:id", CategoryController.atualizar);

export default routes;
