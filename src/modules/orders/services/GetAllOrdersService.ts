import AppError from "../../../shared/errors/AppError";
import Order from "../infra/typeorm/entities/Order";
import OrderRepository from "../infra/typeorm/OrderRepository";

export default class GetAllOrdersService {
  async execute(): Promise<Order[]> {
    const repos = new OrderRepository();
    const lista = await repos.listarPedidos();
    if (typeof lista == "undefined") {
      throw new AppError("não tem nenhum pedido no banco");
    }
    return lista;
  }
}
