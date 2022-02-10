import { Router } from "express";
import ProductController from "../controllers/ProductController";

const routes = Router();

routes.post("/", ProductController.create);

routes.get("/list/", ProductController.listar);

routes.get("/:id", ProductController.achaum);

routes.put("/:id", ProductController.update);

routes.get("/estoque/:id", ProductController.stoc);

export default routes;
