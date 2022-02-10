import { Request, Response } from "express";
import Client from "../../../../clients/infra/typeorm/entities/Client";
import CreateClientService from "../../../services/CreateClientService";
import FindClientService from "../../../services/FindClientService";
import UpdateClientService from "../../../services/UpdateClientService";
import ReturnAllClientService from "../../../services/ReturnAllClientService";
import RemoveClientService from "../../../services/RemoveClientService";

class ClientsController {
  async create(request: Request, response: Response) {
    const data = request.body;
    const createClientService = new CreateClientService();
    const client = await createClientService.execute(data);
    return response.json(client);
  }

  async acha(requisicao: Request, resposta: Response) {
    const ide = parseInt(requisicao.params.id);
    const achador = new FindClientService();
    const cliente = await achador.execute(ide);
    return resposta.json(cliente);
  }

  async atualiza(req: Request, res: Response) {
    const ide = parseInt(req.params.id);
    const cliente = req.body;
    const atualizador = new UpdateClientService();
    const atualizado = await atualizador.execute(cliente, ide);
    return res.json(atualizado);
  }

  async retornaTodos(req: Request, res: Response) {
    const trazclientes = new ReturnAllClientService();
    const clientes = await trazclientes.execute();
    return res.json(clientes);
  }
  async bani(req: Request, res: Response) {
    const banidor3000 = new RemoveClientService();
    const ide = parseInt(req.params.id);
    var resultado = await banidor3000.execute(ide);
    // resultado = await JSON.parse(resultado);

    return res.json(resultado);
  }
}
export default new ClientsController();
