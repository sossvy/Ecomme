import IOrderDTO from "../../dtos/IOrderDTO";
import Order from "./entities/Order";
import IOrderRepository from "../../repositories/IOrderRepository";
import { DeleteResult, getRepository, Repository, UpdateResult } from "typeorm";
import IOrderProductDTO from "../../dtos/IOrderProductDTO";
import OrderProduct from "./entities/OrderProduct";
import AppError from "../../../../shared/errors/AppError";
export default class OrderRepository implements IOrderRepository {
  private ormRepository: Repository<Order>;
  private reposPedPod: Repository<OrderProduct>;
  constructor() {
    this.ormRepository = getRepository(Order);
  }

  async createPedido(data: IOrderDTO): Promise<Order> {
    const pedi = this.ormRepository.create(data);
    return await this.ormRepository.save(pedi);
  }

  async listarPedidos(): Promise<Order[] | undefined> {
    const pedis = await this.ormRepository
      .createQueryBuilder("pedido")
      .leftJoinAndSelect("pedido.pedidoProduto", "opp")
      .getMany();

    return pedis;
  }
  async update(data: IOrderDTO, ide: number): Promise<UpdateResult> {
    const upRe = await this.ormRepository.update(ide, data);
    return upRe;
  }

  async achaum(ide: number): Promise<Order | undefined> {
    const pedi = await this.ormRepository
      .createQueryBuilder("pedido")
      .leftJoinAndSelect("pedido.pedidoProduto", "opp")
      .where("pedido.id = :ide", { ide })
      .getOne();
    return pedi;
  }
  async listarPedidosDoCliente(ide: number): Promise<Order[] | undefined> {
    const pedis = await this.ormRepository
      .createQueryBuilder("pedido")
      .where("pedido.cliente_id = :ide", { ide })
      .leftJoinAndSelect("pedido.pedidoProduto", "opp")
      .getMany();

    return pedis;
  }

  async UpdateOrderState(ide: number, data: IOrderDTO): Promise<string> {
    const ped = await this.ormRepository.findOne(ide);

    const estadoBef = ped?.status;

    const resu = await this.ormRepository.save(data);

    const estadoNow = resu.status;
    if (resu.status === estadoBef) {
      throw new AppError("erro ao tentar mudar estado");
    } else {
      return "estado atualizado de " + estadoBef + " para " + estadoNow;
    }
  }
}
