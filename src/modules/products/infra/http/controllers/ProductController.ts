import { Request, Response } from "express";
import CreateProductService from "../../../services/CreateProductService";
import ListProductService from "../../../services/ListProductService";
import AchaUmProdutoService from "../../../services/AchaUmProductService";
import UpdateProductService from "../../../services/UpdateProductService";
import { setCommentRange } from "typescript";
import ReturnStockService from "../../../services/ReturnStockService";
class ProductController {
  async create(req: Request, res: Response) {
    const data = req.body;
    const service = new CreateProductService();
    const resu = await service.execute(data);
    return res.json(resu);
  }

  async listar(req: Request, res: Response) {
    const service = new ListProductService();
    const resu = await service.execute();
    return res.json(resu);
  }

  async achaum(req: Request, res: Response) {
    const ide = parseInt(req.params.id);
    const service = new AchaUmProdutoService();
    const ans = await service.execute(ide);
    return res.json(ans);
  }

  async update(req: Request, res: Response) {
    const ide = parseInt(req.params.id);
    const data = req.body;
    const service = new UpdateProductService();
    const ans = await service.execute(ide, data);
    return res.json(ans);
  }
  async stoc(req: Request, res: Response) {
    const ide = parseInt(req.params.id);
    const service = new ReturnStockService();
    const stock = await service.execute(ide);

    return res.json({ estoque: stock });
  }
}
export default new ProductController();
