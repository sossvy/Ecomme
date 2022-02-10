import IProductDTO from "../dtos/IProductDTO";
import Product from "../infra/typeorm/entities/Product";
import ProductRepository from "../infra/typeorm/ProductRepository";
import AppError from "../../../shared/errors/AppError";

export default class AchaUmProdutoService {
  async execute(ide: number): Promise<Product> {
    const repos = new ProductRepository();
    const prod = await repos.achaUm(ide);
    if (typeof prod === "undefined") {
      throw new AppError("não existe produto com esse id");
    } else {
      return prod;
    }
  }
}
