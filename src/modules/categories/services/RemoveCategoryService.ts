import Category from "../infra/typeorm/entities/Category";
import CategoryRepository from "../infra/typeorm/CategoryRepository";
import ICategoryDTO from "../dtos/ICategoryDTO";
import { DeleteResult, getRepository, Repository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
export default class RemoveCategoryService {
  private repos = getRepository(Category);

  public async execute(ide: number): Promise<DeleteResult> {
    if (!(await this.repos.findOne(ide))) {
      throw new AppError("não existe categoria com esse id");
    } else {
      const repos = new CategoryRepository();
      const cate = await repos.deletar(ide);
      return cate;
    }
  }
}
