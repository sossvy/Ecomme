import { json, Request, Response } from "express";
import CreateCategoryService from "../../../services/CreateCategoryService";
import FindAllCategoriesService from "../../../services/FindAllCategoriesService";
import RemoveCategoryService from "../../../services/RemoveCategoryService";
import UpdateCategoryService from "../../../services/UpdateCategoryService";

class CategoryController {
  async create(req: Request, res: Response) {
    const data = req.body;
    const service = new CreateCategoryService();
    const cate = await service.execute(data);
    return res.json(cate);
  }

  async listar(req: Request, res: Response) {
    const service = new FindAllCategoriesService();
    const cate = await service.execute();
    return res.json(cate);
  }
  async remover(req: Request, res: Response) {
    const service = new RemoveCategoryService();
    const ide = parseInt(req.params.id);
    const cate = await service.execute(ide);
    return res.json(cate);
  }

  async atualizar(req: Request, res: Response) {
    const service = new UpdateCategoryService();
    const ide = parseInt(req.params.id);
    const conteudo = req.body;
    const resultado = await service.execute(ide, conteudo);
    return res.json(resultado);
  }
}
export default new CategoryController();
