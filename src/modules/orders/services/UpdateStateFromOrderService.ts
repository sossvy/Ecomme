import AppError from "../../../shared/errors/AppError";
import IOrderDTO from "../dtos/IOrderDTO";
import OrderRepository from "../infra/typeorm/OrderRepository";

export default class UpdateStateFromOrderService {
  async execute(ide: number, stado: string): Promise<string> {
    const repo = new OrderRepository();
    const data = await repo.achaum(ide);
    if (typeof data === "undefined") {
      throw new AppError("não existe pedido com o id" + ide);
    } else {
      data.status = stado;

      const action = await repo.UpdateOrderState(ide, data);
      return action;
    }
  }
}
