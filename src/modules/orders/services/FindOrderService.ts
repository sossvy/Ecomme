import Order from "../infra/typeorm/entities/Order";
import OrderRepository from "../infra/typeorm/OrderRepository";

export default class FindOrderService {
  async execute(ide: number): Promise<Order | undefined> {
    const repos = new OrderRepository();
    const pedido = await repos.achaum(ide);
    return pedido;
  }
}
