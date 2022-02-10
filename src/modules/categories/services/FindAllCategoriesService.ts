import Category from "../infra/typeorm/entities/Category";
import CategoryRepository from "../infra/typeorm/CategoryRepository";
import ICategoryDTO from "../dtos/ICategoryDTO";

export default class FindAllCategoriesService {
  public async execute(): Promise<Category[]> {
    const repos = new CategoryRepository();
    const cate = await repos.listar();
    return cate;
  }
}
