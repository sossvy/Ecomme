import { Request, Response } from "express";
import CreateOrderService from "../../../services/CreateOrderService";
import FindOrderService from "../../../services/FindOrderService";
import GetAllOrdersService from "../../../services/GetAllOrdersService";
import FindOrdersFromClientService from "../../../services/FindOrdersFromClientsService";
import UpdateStateFromOrderService from "../../../services/UpdateStateFromOrderService";
class OrderController {
  async Create(req: Request, res: Response) {
    const cria = new CreateOrderService();
    const data = req.body;
    const resp = await cria.execute(data);
    return res.json(resp);
  }

  async Read(req: Request, res: Response) {
    const busca = new FindOrderService();
    const ide = parseInt(req.params.id);
    const pedido = await busca.execute(ide);
    return res.json(pedido);
  }

  async list(req: Request, res: Response) {
    const traz = new GetAllOrdersService();
    const lista = await traz.execute();
    return res.json(lista);
  }

  async listFromClient(req: Request, res: Response) {
    const ide = parseInt(req.params.id);
    const traz = new FindOrdersFromClientService();
    const resul = await traz.execute(ide);
    return res.json(resul);
  }

  async UpdateState(req: Request, res: Response) {
    const ide = parseInt(req.params.id);
    const stado = req.body.status;
    const service = new UpdateStateFromOrderService();
    const resu = await service.execute(ide, stado);
    return res.json("resultado : " + resu);
  }
}
export default new OrderController();
