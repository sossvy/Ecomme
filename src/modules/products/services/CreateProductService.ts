import IProductDTO from "../dtos/IProductDTO";
import Product from "../infra/typeorm/entities/Product";
import ProductRepository from "../infra/typeorm/ProductRepository";
import CategoryRepository from "../../categories/infra/typeorm/CategoryRepository";
import AppError from "../../../shared/errors/AppError";

export default class CreateProductService {
  async execute(data: IProductDTO): Promise<Product> {
    const catRepos = new CategoryRepository();

    if (await catRepos.existeIdCategoria(data.categoria_id)) {
      const repos = new ProductRepository();
      if (!(await repos.proTemNome(data.nome))) {
        const product = await repos.create(data);
        return product;
      } else {
        throw new AppError("já existe produto com esse nome");
      }
    } else {
      throw new AppError("não existe categoria com esse id");
    }
  }
}
