import Product from "../infra/typeorm/entities/Product";
import ProductRepository from "../infra/typeorm/ProductRepository";
export default class ListProductService {
  async execute(): Promise<Product[]> {
    const repos = new ProductRepository();
    return await repos.listar();
  }
}
