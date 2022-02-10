import Order from "../infra/typeorm/entities/Order";
import OrderRepository from "../infra/typeorm/OrderRepository";

export default class FindOrdersFromClientService {
  async execute(ide: number): Promise<Order[] | undefined> {
    const repos = new OrderRepository();
    const achalos = await repos.listarPedidosDoCliente(ide);
    return achalos;
  }
}
