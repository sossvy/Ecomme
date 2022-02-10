import Order from "../infra/typeorm/entities/Order";
import IOrderDTO from "../dtos/IOrderDTO";
import OrderRepository from "../infra/typeorm/OrderRepository";
import ProductRepository from "../../products/infra/typeorm/ProductRepository";
import AppError from "../../../shared/errors/AppError";
export default class CreateOrderService {
  async execute(data: IOrderDTO): Promise<Order> {
    const prodRepos = new ProductRepository();
    const tam = data.pedidoProduto.length;

    if (
      tam == 0 ||
      data.pedidoProduto[0].quantidade == undefined ||
      data.pedidoProduto[0].produto_id == undefined
    ) {
      throw new AppError(
        "lembre-se de especificar a quantidade e o id dos produtos"
      );
    }

    let total: any;
    total = 0;
    for (let i = 0; i < tam; i++) {
      let precuni = await prodRepos.prodPrec(data.pedidoProduto[i].produto_id);
      let quan = await prodRepos.prodEstq(data.pedidoProduto[i].produto_id);
      const quan_prod_ped = data.pedidoProduto[i].quantidade;

      if (quan < quan_prod_ped) {
        throw new AppError(
          " não possuimos " +
            quan_prod_ped +
            " unidades do produto de id " +
            data.pedidoProduto[i].produto_id +
            ", possuimos apenas " +
            quan +
            " unidades disponiveis "
        );
      } else {
        const prod = await prodRepos.achaUm(data.pedidoProduto[i].produto_id);
        if (typeof prod === "undefined") {
          throw new AppError("produto não achado, voce colocou um id errado? ");
        } else {
          if (data.pedidoProduto[i].quantidade === 0) {
            throw new AppError("não é possivel comprar 0 produtos");
          }
          prod.quantidade = prod.quantidade - quan_prod_ped;
          await prodRepos.update(data.pedidoProduto[i].produto_id, prod);
        }
      }

      total += precuni * data.pedidoProduto[i].quantidade;
    }

    data.valor = total;
    const repos = new OrderRepository();
    const order = await repos.createPedido(data);
    return order;
  }
}
