import Category from "../infra/typeorm/entities/Category";
import CategoryRepository from "../infra/typeorm/CategoryRepository";
import ICategoryDTO from "../dtos/ICategoryDTO";
import { getRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";

export default class CreateCategoryService {
  public async execute(data: ICategoryDTO): Promise<Category> {
    const categoryRepository = new CategoryRepository();

    if (!(await categoryRepository.existeDescricao(data.descricao))) {
      const cat = await categoryRepository.create(data);
      return cat;
    } else {
      throw new AppError("ja existe categoria com essa descrição", 400);
    }
  }
}
